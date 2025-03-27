<?php
require_once 'includes/connexion.php';
require_once 'includes/fonctions.php';

if (!isset($_SESSION['utilisateur'])) {
    header('Location: connexion.php');
    exit;
}

$titre = 'Gestion des tickets';
include 'includes/header.php';

?>
<div class="container">
    <h1><?= $titre ?></h1>
    <p>Bienvenue dans l'application de gestion des tickets de l'entreprise.</p>
    <ul>
        <li><a href="tickets/liste.php">Liste des tickets</a></li>
        <li><a href="tickets/ajouter.php">Ajouter un ticket</a></li>
    </ul>
</div>
<?php
include 'includes/footer.php';

?>
<?php
$serveur = 'localhost';
$base = 'gestion_tickets';
$utilisateur = 'root';
$motdepasse = '';
try {
    $connexion = new PDO("mysql:host=$serveur;dbname=$base", $utilisateur, $motdepasse);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Erreur de connexion : ' . $e->getMessage();
    exit;
}
?>
<?php


function getTickets() {
    global $connexion;
    $requete = $connexion->prepare('SELECT * FROM tickets');
    $requete->execute();
    return $requete->fetchAll(PDO::FETCH_ASSOC);
}

function ajouterTicket($titre, $description) {
    global $connexion;
    $requete = $connexion->prepare('INSERT INTO tickets (titre, description) VALUES (:titre, :description)');
    $requete->bindParam(':titre', $titre);
    $requete->bindParam(':description', $description);
    return $requete->execute();
}

function modifierTicket($id, $titre, $description) {
    global $connexion;
    $requete = $connexion->prepare('UPDATE tickets SET titre = :titre, description = :description WHERE id = :id');
    $requete->bindParam(':id', $id);
    $requete->bindParam(':titre', $titre);
    $requete->bindParam(':description', $description);
    return $requete->execute();
}

function supprimerTicket($id) {
    global $connexion;
    $requete = $connexion->prepare('DELETE FROM tickets WHERE id = :id');
    $requete->bindParam(':id', $id);
    return $requete->execute();
}
?>

<?php
require_once '../includes/connexion.php';
require_once '../includes/fonctions.php';

$titre = 'Liste des tickets';
include '../includes/header.php';

$tickets = getTickets();
?>
<d?php
<div  class="container">
    <h1= $titre ?></h1>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Titre</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
            </thead>
            </table>
        </thead>
        </div>
        <tbody>
            <?php foreach ($tickets as $ticket) : ?>
            <tr>
                <td><?= $ticket['id'] ?></td>
                <td><?= $ticket['titre'] ?></td>
                <td><?= $ticket['description'] ?></td>
                <td>
                    <a href="modifier.php?id=<?= $ticket['id'] ?>">Modifier</a>
                    <a href="supprimer.php?id=<?= $ticket['id'] ?>">Supprimer</a>
                </td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</div>
<?php
include '../includes/footer.php';
?>
<?php
require_once '../includes/connexion.php';
require_once '../includes/fonctions.php';

$titre = 'Ajouter un ticket';
include '../includes/header.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $titre = $_POST['titre'];
    $description = $_POST['description'];
    ajouterTicket($titre, $description);
}
?>

