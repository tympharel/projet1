<?php
error_reporting(E_ALL);
session_start(); // Start the session to manage user state
require_once "conn.php"; // Include the database connection

$message = "";
$error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Use prepared statements to prevent SQL injection
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Prepare the SQL statement to fetch the user
    $query = "SELECT * FROM users WHERE email = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);

    if ($result) {
        $user = mysqli_fetch_assoc($result);
        if ($user) {
            // Compare the plain text password directly
            if ($password === $user['password']) {
                // Successful login
                $_SESSION['user_id'] = $user['id']; // Store user ID in session
                $_SESSION['email'] = $user['email']; // Store email in session
                $_SESSION['role'] = $user['role']; // Store role in session
                $_SESSION['sector'] = $user['sector']; // Store sector in session
                $message = "Bienvenue " . htmlspecialchars($user['email']) . "!";

                // Redirect based on user role
                if ($user['role'] === 'admin') {
                    header("Location: users-dashboard\dist\index.php"); // Redirect to admin dashboard
                } else {
                    header("Location: gsticket.php"); // Redirect to user ticket page
                }
                exit();
            } else {
                $error = "Mot de passe incorrect.";
            }
        } else {
            $error = "Aucun utilisateur trouvé avec cet email.";
        }
    } else {
        $error = "Erreur de requête: " . mysqli_error($conn);
    }

    mysqli_stmt_close($stmt);
}

mysqli_close($conn);
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: #f2f2f2;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-image: url("img1.jpg");
            background-size: cover;
            background-position: center;
        }
        .container {
            background: rgba( 255, 255, 255, 0.8);
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            max-width: 400px;
             background-image: url("img1.jpg");
            width: 100%;  animation: fadeIn 3s linear forwards;
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
            margin-bottom: 15px;
        }
        .form-control {
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: border-color 0.3s;
            width: 90%;
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
            color: black;
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
            background: linear-gradient(to right, #ff105f, #ffad06);
            color: #fff;
            font-size: 16px;
            cursor: pointer;
            transition: background 0.3s;
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
        <h2>Connexion</h2>
        <?php if ($message): ?>
            <div class="alert alert-success"><?php echo $message; ?></div>
        <?php endif; ?>
        <?php if ($error): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>
        <form action="" method="post">
            <div class="form-group">
                <input type="email" id="email" name="email" class="form-control" required placeholder=" ">
                <label for="email" class="form-label">Email</label>
            </div>
            <div class="form-group">
                <input type="password" id="password" name="password" class="form-control" required placeholder=" ">
                <label for="password" class="form-label">Mot de passe</label>
            </div>
            <button type="submit" class="submit-btn">Se connecter</button>
            <p class="text-muted">
                Pas encore de compte ? <a href="index.php">Inscription</a>
            </p>
        </form>
    </div>
</body>
</html>