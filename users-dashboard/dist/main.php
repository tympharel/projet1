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
$query = "SELECT t.*, u.email, u.username FROM ticket t JOIN users u ON t.user_id = u.id ORDER BY u.username ASC"; // Corrected SQL query
$result = mysqli_query($conn, $query);
if ($result) {
    $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
} else {
    echo "Error fetching tickets: " . mysqli_error($conn);
}

// Fetch users and their problems
$query_users = "
    SELECT u.email, u.username, u.sector, t.pb AS problem, t.description, COUNT(t.pb) AS problem_count
    FROM users u
    JOIN ticket t ON u.id = t.user_id
    GROUP BY u.id, t.pb, t.description
    ORDER BY u.email ASC
";

$result_users = mysqli_query($conn, $query_users);
$users = [];
if ($result_users) {
    while ($row = mysqli_fetch_assoc($result_users)) {
        $users[$row['email']][] = $row; // Group problems by user email
    }
} else {
    echo "Error fetching users: " . mysqli_error($conn);
}

// Debugging: Check if users array is populated
if (empty($users)) {
    echo "No users found or no problems reported.";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: rgb(40, 3, 3);
            margin: 0;
            padding: 20px;
            color: white;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid white;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: dodgerblue;
        }
        tr:nth-child(even) {
            background-color: rgba(244, 228, 228, 0.1);
        }
        .header1 {
            font-size: 40px;
            text-align: center;
            padding: 10px;
            background-color: dodgerblue;
            font-weight: bold;
        }
        .description {
            color: red; /* Style for the description */
        }
    </style>
</head>
<body>
<div class="dashboard">
    <header class="header1">Admin Dashboard</header>
    <header class="menu-wrap">
        <!-- Existing menu code... -->
    </header>

    <main class="content-wrap">
        <section class="info-boxes" style="width: 100%;">
            <h2>User Problems Overview</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Sector of Activity</th>
                        <th>Problems</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($users as $email => $problems): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($problems[0]['username']); ?></td>
                            <td><?php echo htmlspecialchars($email); ?></td>
                            <td><?php echo htmlspecialchars($problems[0]['sector']); ?></td>
                            <td>
                                <select>
                                    <?php 
                                    $problemIndex = 1; // Initialize problem index for ordered list
                                    foreach ($problems as $problem): ?>
                                        <option value="<?php echo htmlspecialchars($problem['problem']); ?>">
                                            <?php echo $problemIndex . ". " . htmlspecialchars($problem['problem']) . " (" . htmlspecialchars($problem['problem_count']) . ")"; ?>
                                        </option>
                                        <option value="<?php echo htmlspecialchars($problem['description']); ?>">
                                            <span class="description"><?php echo htmlspecialchars($problem['description']); ?></span>
                                        </option>
                                        <?php $problemIndex++; // Increment the index ?>
                                    <?php endforeach; ?>
                                </select>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </section>
    </main>
</div>
</body>
</html>