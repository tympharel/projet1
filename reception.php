<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table de Réception de Tickets</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Table de Réception de Tickets</h1>
        <table id="ticketTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Date</th>
                    <th>Statut</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Jean Dupont</td>
                    <td>Problème de connexion</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
          
                </tr>
                <tr>
                    <td>2</td>
                    <td>Marie Curie</td>
                    <td>Erreur de paiement</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>paul pogba</td>
                    <td>difficulté d'impression</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>cyntia fiagan</td>
                    <td>Problème de connexion</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>fotso gwladys</td>
                    <td>Problème de connexion</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>yakam azor</td>
                    <td>Problème de reseau</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>ngangop bryan</td>
                    <td>Problème de connexion</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>tofeuke dominique</td>
                    <td>Problème de connexion</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>guemdjo karen</td>
                    <td>Problème de connexion</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>bell mark</td>
                    <td>Perte du serveur</td>
                    <td>2024-08-28</td>
                    <td>ouvert</td>
                </tr>
            </tbody>
        </table>
    </div>
    <script src="script.js"></script>
</body>
</html>
<style>
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to right, white, black);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}
.button-right{
    float: right;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: green;
    font-weight: bold;
}

.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 600px;
}

h1 {
    text-align: center;
    color: #333;
    font-family: nunito;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

th, td {
    padding: 10px;
    border: 1px solid black;
    text-align: left;
    font-weight: bold;
}

th {
    background-color:#2e2e2e;
    color: #fff;
   
}

form {
    display: flex;
    flex-direction: column;
}

</style>
<script>
document.getElementById('ticketForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    const table = document.getElementById('ticketTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = table.rows.length;
    cell2.innerHTML = name;
    cell3.innerHTML = description;
    cell4.innerHTML = date;

    document.getElementById('ticketForm').reset();
});
</script>