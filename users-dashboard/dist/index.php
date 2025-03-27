<?php
session_start();
require_once "conn.php"; // Include the database connection

// Check if user is logged in and is admin
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: connexion.php"); // Redirect to login if not admin
    exit();
}

// Fetch tickets from database
$tickets = [];
$searchTerm = isset($_GET['search']) ? $_GET['search'] : '';

$query = "SELECT t.*, u.email, u.username 
          FROM ticket t 
          JOIN users u ON t.user_id = u.id 
          WHERE u.email LIKE ? OR u.username LIKE ? 
          ORDER BY u.username ASC";

$stmt = $conn->prepare($query);
$searchWildcard = "%" . $searchTerm . "%";
$stmt->bind_param("ss", $searchWildcard, $searchWildcard);
$stmt->execute();
$result = $stmt->get_result();

if ($result) {
    $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
}

// Function to highlight search terms
function highlightTerm($text, $term) {
    if (empty($term)) {
        return $text; // Return original text if no term is provided
    }
    return preg_replace('/(' . preg_quote($term, '/') . ')/i', '<span class="highlight">$1</span>', $text);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }
        .sidebar {
            height: 100vh;
            background-color: #343a40;
            padding-top: 20px;
        }
        .sidebar a {
            color: #ffffff;
        }
        .sidebar a:hover {
            background-color: #495057;
        }
        .header {
            background-color: #007bff;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .table th, .table td {
            vertical-align: middle;
        }
        .highlight {
            background-color: yellow; /* Change this to your desired highlight color */
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="d-flex">
    <nav class="sidebar col-md-2">
        <h4 class="text-white text-center">Admin Menu</h4>
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="inscription.php">
                    <i class="fas fa-user-plus"></i> Create New User
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="main.php">
                    <i class="fas fa-tasks"></i> Briefing
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="problems_flow.php">
                    <i class="fas fa-chart-line"></i> Graph
                </a>
            </li>
        </ul>
    </nav>

    <div class="content col-md-10">
        <header class="header">
            <h1>Admin Dashboard</h1>
            <p>Welcome, <?php echo htmlspecialchars($_SESSION['email']); ?> (Admin)</p>
        </header>

        <div class="container mt-4">
            <div class="row mb-3">
                <div class="col-md-6">
                    <input type="text" id="search" class="form-control" placeholder="Search..." value="<?php echo htmlspecialchars($searchTerm); ?>">
                </div>
                <div class="col-md-2">
                    <button id="searchButton" class="btn btn-primary">Search</button>
                </div>
            </div>
            <h2>Recent Tickets</h2>
            <table class="table table-bordered table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>User Email</th>
                        <th>Username</th>
                        <th>Problem</th>
                        <th>Description</th>
                        <th>Date Created</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($tickets as $ticket): ?>
                    <tr>
                        <td><?php echo highlightTerm(htmlspecialchars($ticket['email']), $searchTerm); ?></td>
                        <td><?php echo highlightTerm(htmlspecialchars($ticket['username']), $searchTerm); ?></td>
                        <td><?php echo highlightTerm(htmlspecialchars($ticket['pb']), $searchTerm); ?></td>
                        <td><?php echo highlightTerm(htmlspecialchars($ticket['description']), $searchTerm); ?></td>
                        <td><?php echo highlightTerm(htmlspecialchars($ticket['date1']), $searchTerm); ?></td>
                    </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script>
    document.getElementById('searchButton').addEventListener('click', function() {
        const searchTerm = document.getElementById('search').value;
        window.location.href = `index.php?search=${encodeURIComponent(searchTerm)}`;
    });
</script>
</body>
</html>