<?php
// $connexion = new PDO('mysql:host=127.0.0.1;dbname=bd_ticket','root','');
// if (isset($_post['valider'])){
//     if(!empty($_post['email']) AND !empty($_post['password'])){
//         $email= htmlspecialchars($_post['password']);
//         $password= sha1($_post['password']);
//         $req= $connexion->prepare("SELECT * FROM tab_client WHERE email=? AND password = ?");
//         $req->execute(array($email,$password)); 
//         $cpt =$req->rowCount();

//         if ($cpt==1) {M
//             $message ="votre messsage a bien ete trouve ";
//         }else{
//             $message = "desole nous ne trouvons pas votre compte";
//         }

//     }else{
//         $message="veillez remplir tous les champs";
//     }
// }
// ?>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'Inscription</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="form-box">
            <h2>Inscription</h2>
            <form id="registerForm">
                <div class="input-group">
                    <input type="text" id="username" required>
                    <label for="username">Nom d'utilisateur</label>
                </div>
                <div class="input-group">
                    <input type="email" id="email" required>
                    <label for="email">Email</label>
                </div>
                <div class="input-group">
                    <input type="password" id="password" required>
                    <label for="password">Mot de passe</label>
                </div>
                <button type="submit" name="valider" class="submit-btn">S'inscrire
                <a href="gsticket.html">s'inscrire</a> 
                </button>
                <p class="text-center text-muted ">
                    En cliquant sur s'inscrire,vous acceptez nos <a href="">condiitions  generales</a>
                </p>
                <p class="text-center text-muted ">
                    Avez vous deja un compte ? <a href="unitled.php">connexion</a>
                </p>
            </form>
        </div>
    </div>
    <style>
        body {
    font-family: Arial, sans-serif;
    background: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-weight: bold;
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

h2 {
    text-align: center;
    margin-bottom: 20px;
}
.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-group input {
    width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
}
.input-group label {
    position: absolute;
    top: 20px;
    left: 10px;
    pointer-events: none;
}

.input-group input:focus + label,
.input-group input:valid + label {
    top: -20px;
    left: 10px;
    font-size: 12px;
    color: #333;
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
    transition: 0.3s;
}
.submit-btn:hover {
    background: linear-gradient(to right, #ffad06, #ff105f);
}
</body>
</html>
<button type="submit" class="submit-btn">S'inscrire</button>