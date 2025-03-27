<?php
error_reporting(E_ALL);
session_start();
require_once "conn.php"; // Include the database connection

$message = "";
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if all required fields are set
    if (isset($_POST['username'], $_POST['email'], $_POST['password'], $_POST['sector'], $_POST['role'])) {
        // Use prepared statements to prevent SQL injection
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $sector = mysqli_real_escape_string($conn, $_POST['sector']);
        $role = mysqli_real_escape_string($conn, $_POST['role']);
        $username = mysqli_real_escape_string($conn, $_POST['username']);

        // Prepare the SQL statement to insert the new user
        $query = "INSERT INTO users (username, email, password, sector, role) VALUES (?, ?, ?, ?, ?)";
        $stmt = mysqli_prepare($conn, $query);

        // Check if the statement was prepared successfully
        if ($stmt) {
            mysqli_stmt_bind_param($stmt, "sssss", $username, $email, $password, $sector, $role);

            if (mysqli_stmt_execute($stmt)) {
                $message = "Inscription réussie";
            } else {
                $error = "Erreur lors de l'inscription: " . mysqli_error($conn);
            }

            mysqli_stmt_close($stmt);
        } else {
            $error = "Erreur lors de la préparation de la requête: " . mysqli_error($conn);
        }
    } else {
        $error = "Veuillez remplir tous les champs.";
    }
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-image: url("img1 copy.jpg");
            background-size: cover;
     
        }
   
        .container {
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            max-width: 400px;
            width: 100%;
            animation: slideIn 1s linear forwards;
            background-color: transparent;
            animation: fadeIn 2s linear forwards;
}
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
        h2 {
            text-align: center;
            margin-bottom: 20px;
            color: black;
        }
        .form-group {
            position: relative;
            margin-bottom: 20px;
        }
        .form-control {
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: border-color 0.3s;
            width: 95%;
        }
        .form-control:focus {
            border-color: black;
            box-shadow: 0 0 5px rgba(255, 16, 95, 0.5);
        }
        .form-label {
            position: absolute;
            left: 10px;
            top: 10px;
            transition: 0.2s ease all;
            color: #999;
            pointer-events: none;
        }
        .form-control:focus + .form-label,
        .form-control:not(:placeholder-shown) + .form-label {
            top: -10px;
            left: 10px;
            font-size: 12px;
            color: black;
        }
        .submit-btn {
            width: 100%;
            padding: 10px;
            border: none;
            border-radius: 5px;
            background: green;
            color: #fff;
            font-size: 16px;
            cursor: pointer;
        }
        .submit-btn:hover {
            background: linear-gradient(to right, #ffad06, #ff105f);
        }
        .text-muted {
            text-align: center;
            margin-top: 10px;
            color: black;
        }
        .alert {
            margin-top: 20px;
            padding: 10px;
            border-radius: 5px;
        }
        .alert-danger {
            background-color: #f8d7da;
            color: #721c24;
        }
        .alert-success {
            background-color: #d4edda;
            color: #155724;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Inscription</h2>
        <?php if ($message): ?>
            <div class="alert alert-success"><?php echo htmlspecialchars($message); ?></div>
        <?php endif; ?>
        <?php if ($error): ?>
            <div class="alert alert-danger"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>
        <form action="" method="post">
            <div class="form-group">
                <input type="text" id="username" name="username" class="form-control" required placeholder=" ">
                <label for="username" class="form-label">Username</label>
            </div>
            <div class="form-group">
                <input type="email" id="email" name="email" class="form-control" required placeholder=" ">
                <label for="email" class="form-label">Email</label>
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" class="form-control" required placeholder=" ">
                <label for="password" class="form-label">Mot de passe</label>
            </div>
            <div class="form-group">
                <label for="sector">Secteur d'activité:</label>
                <select id="sector" name="sector" class="form-control" required>
                    <option value="">Sélectionnez un secteur</option>
                    <option value="IT">informatique</option>
                    <option value="comptabilité">comptabilité</option>
                    <option value="Fujisat">Fujisat</option>
                    <option value="maintenance">maintenance</option>
                    <option value="Commercial">Commercial</option>
                    <option value="RH">Ressources Humaine</option>
                    <option value="infographie">Infographie</option>
                    <option value="numerique">numerique</option>
                </select>
            </div>
            <div class="form-group">
                <label for="role">Rôle:</label>
                <select id="role" name="role" class="form-control" required>
                    <option value="user">Utilisateur</option>
                    <option value="admin">Administrateur</option>
                </select>
            </div>
            <button type="submit" class="submit-btn">inscrire</button>
    
        </form>
    </div>
</body>
</html>