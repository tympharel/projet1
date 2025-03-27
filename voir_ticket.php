<?php
session_start();
require_once "conn.php";

if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit();
}

// Fetch all tickets
$tickets = [];
$query = "SELECT t.*, u.email FROM ticket t JOIN users u ON t.user_id = u.id";
$result = mysqli_query($conn, $query);
if ($result) {
    $tickets = mysqli_fetch_all($result, MYSQLI_ASSOC);
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>View Tickets</title>
    <style>
        .ticket-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        .ticket-table th, .ticket-table td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        .ticket-table tr:nth-child(even){background-color: #f2f2f2;}
    </style>
</head>
<body>
    <h1>All Tickets</h1>
    <table class="ticket-table">
        <thead>
            <tr>
                <th>User Email</th>
                <th>Problem</th>
                <th>Description</th>
                <th>Date Created</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($tickets as $ticket): ?>
            <tr>
                <td><?php echo htmlspecialchars($ticket['email']); ?></td>
                <td><?php echo htmlspecialchars($ticket['pb']); ?></td>
                <td><?php echo htmlspecialchars($ticket['description']); ?></td>
                <td><?php echo $ticket['created_at']; ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>