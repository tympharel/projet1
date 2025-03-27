<?php
session_start();
require_once "conn.php"; // Include the database connection

// Check if user is logged in and is admin
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: connexion.php"); // Redirect to login if not admin
    exit();
}

// Set the year for which you want to fetch the data
$currentYear = date('Y'); // Current year

// Fetch all sectors for the dropdown
$sectorQuery = "SELECT DISTINCT sector FROM users";
$sectorResult = $conn->query($sectorQuery);
$sectors = [];
while ($row = $sectorResult->fetch_assoc()) {
    $sectors[] = $row['sector'];
}

// Get the selected sector from the query parameters or default to the first sector
$selectedSector = isset($_GET['sector']) ? $_GET['sector'] : (count($sectors) > 0 ? $sectors[0] : '');

// Fetch the number of problems reported per month for the selected sector
$query = "
    SELECT MONTH(t.date1) AS month, COUNT(t.id) AS problem_count
    FROM ticket t
    JOIN users u ON t.user_id = u.id
    WHERE u.sector = ? AND YEAR(t.date1) = ?
    GROUP BY MONTH(t.date1)
    ORDER BY MONTH(t.date1)
";

$stmt = $conn->prepare($query);
$stmt->bind_param("si", $selectedSector, $currentYear);
$stmt->execute();
$result = $stmt->get_result();

$months = array_fill(1, 12, 0); // Initialize array for all 12 months
$totalProblems = 0;
while ($row = $result->fetch_assoc()) {
    $months[$row['month']] = $row['problem_count']; // Assign problem count to respective month
    $totalProblems += $row['problem_count'];
}

$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Problems Distribution Bar Chart</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            text-align: center;
        }
        canvas {
            width: 800px;
            height: 600px;
            margin: auto;
        }
    </style>
</head>
<body>
    <h1>Problems Distribution for <?php echo htmlspecialchars($selectedSector); ?> in <?php echo $currentYear; ?></h1>
    <div class="container mt-4">
        <div class="row mb-3">
            <div class="col-md-12">
                <select id="sectorSelect" class="form-control" onchange="updateGraph()">
                    <?php foreach ($sectors as $sector): ?>
                        <option value="<?php echo htmlspecialchars($sector); ?>" <?php echo ($sector === $selectedSector) ? 'selected' : ''; ?>>
                            <?php echo htmlspecialchars($sector); ?>
                        </option>
                    <?php endforeach; ?>
                </select>
            </div>
        </div>
        <canvas id="problemsChart"></canvas>
    </div>
    <script>
        const ctx = document.getElementById('problemsChart').getContext('2d');
        const problemData = [<?php echo implode(',', $months); ?>];
        const totalProblems = <?php echo $totalProblems; ?>;

        const problemsChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Number of Problems',
                    data: problemData,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 5,
                            callback: function(value) {
                                if (value === 5 || value === 10 || value === 15 || value >= 20) {
                                    return value;
                                }
                            }
                        },
                        title: {
                            display: true,
                            text: 'Number of Problems'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Month'
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                let value = tooltipItem.raw;
                                let percentage = totalProblems > 0 ? ((value / totalProblems) * 100).toFixed(2) + '%' : '0%';
                                return `Problems: ${value} (${percentage})`;
                            }
                        }
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        formatter: function(value, context) {
                            let percentage = totalProblems > 0 ? ((value / totalProblems) * 100).toFixed(2) + '%' : '0%';
                            return value + ' (' + percentage + ')';
                        },
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        });

        function updateGraph() {
            const selectedSector = document.getElementById('sectorSelect').value;
            window.location.href = `problems_flow.php?sector=${encodeURIComponent(selectedSector)}`;
        }
    </script>
</body>
</html>