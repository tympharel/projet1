<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Afficher les Informations du Ticket</title>
    <div class="container">
    <div class="form-box"></div>
    <h1>Utilisation des services</h1>
    <p> En utilisant notre application de gestion de tickets, vous acceptez de créer des tickets uniquement pour des demandes légitimes et pertinentes. Vous vous engagez à fournir des informations précises et complètes lors de la création de tickets. Toute utilisation abusive, y compris la création de tickets frauduleux ou la fourniture d’informations trompeuses, peut entraîner la suspension ou la résiliation de votre accès à l’application. Nous nous réservons le droit de modifier, suspendre ou interrompre les services à tout moment, avec ou sans préavis.</p>
    <button type="submit" name="valider" class="submit-btn1">retour
    <a href="index.php">back</a> 
    <style>
            body {
    font-family: var(--bs-font-sans-serif);
    font-size: 1rem;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    background: url('ticket.jpg');
    background: blue;
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
    animation: slideIn 2s linear forwards;
}
@keyframes slideIn {
  from { transform: translateY(-100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.slide-in {
  animation: slideIn 1s ease-out;
}


.fade-in {
  animation: fadeIn 2s ease-in-out;
}


.scale-up-animation {
  animation: scaleUp 4s infinite;
}


.blink-animation {
  animation: blink 1s infinite;
}

.move-right-animation {
  animation: moveRight 3s infinite;
}


.color-animation {
  animation: colorChange 5s infinite;
}


.form-box {
    max-width: 400px;
    margin: auto;
}
h1{
    text-align: center;
  
}
.submit-btn1{
    padding: 10px;
    border: none;
    border-radius: 5px;
    background:green ;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    float: right;
}  
</style>      
</body>
</html>
    