
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Base de Connaissances</title>
    <form method="GET" action=""></form>
    <input type="text" name="search" placeholder="Rechercher un article..." value="<?php echo isset($_GET['search']) ? $_GET['search'] : ''; ?>">
            <button type="submit">Rechercher</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Contenu</th>
                </tr>
            </thead>
            <title>Créer un Article</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 800px;
        }
        h2 {
            margin-bottom: 20px;
            color: #333;
        }
        input[type="text"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            padding: 10px;
            border: 1px solid #ccc;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 400px;
        }
        h2 {
            margin-bottom: 20px;
            color: #333;
        }
        input[type="text"], textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            background-color: #28a745;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #218838;
        }
    </style>
</head>

       
            <input type="text" name="search" placeholder="Rechercher un article..." value="<?php echo isset($_GET['search']) ? $_GET['search'] : ''; ?>">
            <button type="submit">Rechercher</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Contenu</th>
                </tr>
            </thead>
            <title>Créer un Article</title>
            <div class="container">
                
        <h2>Créer un Article</h2>
        <form action="submit_article.php" method="post">
            <label for="title">Titre</label>
            <input type="text" id="title" name="title" required>
            
            <label for="content">Contenu</label>
            <textarea id="content" name="content" rows="4" required></textarea>
            
            <button type="submit">Soumettre</button>
        </form>
        </div>

</head>
</body>
</html>

            <tbody>