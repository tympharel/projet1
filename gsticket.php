<?php
session_start(); // Start the session to manage user state
require_once "conn.php"; // Include your database connection

// Initialize variables
$message = '';

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php"); // Redirect to login if not logged in
    exit();
}

$user_id = $_SESSION['user_id']; // Get the user ID from the session

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $problem = $_POST["probleme"];
    $description = $_POST["description"];

    // If the user selected "Autre", use the description as the problem
    if ($problem === 'autre') {
        $problem = $description; // Use the description as the problem 
        $description = ''; // Clear the description since it's now the problem
    }

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO ticket (user_id, pb, description) VALUES (?, ?, ?)");
    $stmt->bind_param("iss", $user_id, $problem, $description);

    // Execute the statement
    if ($stmt->execute()) {
        header("Location: voirticket.php"); // Correct way to redirect
        exit(); // Always call exit after header redirection
    } else {
        $message = "Erreur: " . $stmt->error;
    }
    // Close the statement
    $stmt->close();
}
?> 

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Formulaire de Ticket</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url("img2.jpg");
            background-size: 100% auto;
            background-position: center;
        }
        .container {
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            max-width: 500px;
            width: 100%;
            background-color: white;
            margin-left: 40%;
            animation: fadeIn 3s linear forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 50px;
            text-align: center;
            margin-bottom: 20px;
        }
        select, textarea, button {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border-radius: 4px;
            border: 1px solid #ccc;
            font-size: 16px;
        }
        button {
            background-color: sienna;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 15px;
        }
        #autre-probleme {
            display: none; /* Initially hide the textarea */
        }
    </style>
    <script>
        function afficherAutreProbleme(selection) {
            var autreProbleme = document.getElementById('autre-probleme');
            if (selection.value === 'autre') {
                autreProbleme.style.display = 'block';
            } else {
                autreProbleme.style.display = 'none';
            }
        }
    </script>
</head>
<body>
    <div class="container">
        <h1>Veuillez créer votre ticket</h1>
        <?php if ($message): ?>
            <p><?php echo $message; ?></p>
        <?php endif; ?>
        <form action="" method="post">
            <label for="probleme">Sélectionnez un problème :</label>
            <select id="probleme" name="probleme" onchange="afficherAutreProbleme(this)">
                <option value="">---------select---------</option>
                <option value="probleme connexion">Problème de connexion</option>
                <option value="ordinateur lent">Ordinateur lent</option>
                <option value="ecran">Écran bleu</option>
                <option value="impression">Problème d'impression</option>
                <option value="autre">Autre</option>
            </select>
            
            <div id="autre-probleme">
                <label for="description">Description du problème :</label>
                <textarea id="description" name="description" rows="4" cols="50"></textarea>
            </div>
            
            <button type="submit">Envoyer</button>
        </form>
    </div>
</body>
</html>