<?php
require_once "conn.php"; // Include your database connection

// Initialize user ID
$user_id = 34; // Replace with actual user ID from session or other source

// Prepare the statement
$query = $conn->prepare("SELECT pb, description, date1 FROM ticket WHERE user_id = ? ORDER BY date1 DESC LIMIT 1"); 
$query->bind_param("i", $user_id); // Bind the user ID
$query->execute();

// Bind the result variables
$query->bind_result($probleme, $description, $date);

// Fetch the results
$tickets = [];
while ($query->fetch()) {
    $tickets[] = [
        'pb' => $probleme,
        'description' => $description,
        'date1' => $date
    ];
}
if ($date) {
    $dateTime = new DateTime($date);
    $writtenDate = $dateTime->format('j F Y'); 
}

// Check if there are any tickets
// if (count($tickets) > 0) {
//     // Assuming you want to display the first ticket for demonstration
//     $probleme = $tickets[0]['pb'];
//     $description = $tickets[0]['description'];
// } else {
//     $probleme = "Aucun problème trouvé.";
//     $description = "";
// }

// Close the statement
$query->close();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Afficher les Informations du Ticket</title>
    <style>
        body {
            font-family: nunito;
            background: linear-gradient(to right, #6a11cb, #2575fc);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-size: 20px;
        }

        .container {
            background: #fff;
            padding: 100px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
        }

        .form-box {
            max-width: 400px;
            margin: auto;
        }

        h1 {
            text-align: center;
        }

        .submit-btn {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: red;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            float: left;
        }

        .submit-btn1 {
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: green;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: 0.3s;
            float: right;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-box">
            <h1>Détails du Ticket</h1>
            <p>
                D'après votre description faite en ce jour <?php echo htmlspecialchars($date); ?>vous signalez le probleme suivant "<?php echo htmlspecialchars($probleme); ?><?php echo htmlspecialchars($description); ?>"
                Veuillez cliquer sur le bouton envoyer pour faire parvenir votre ticket vers le service informatique ou retour pour refaire un ticket.
            </p>
            <button class="submit-btn1">
                <a href="recu.php" style="color: white; text-decoration: none;">Envoyer</a>
            </button>
            <button class="submit-btn">
                <a href="gsticket.php" style="color: white; text-decoration: none;">Retour</a>
            </button>
        </div>
    </div>
</body>
</html>