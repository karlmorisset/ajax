<?php

namespace App\Model;

use PDO;

class ArticleManager extends AbstractManager
{
    public const TABLE = 'Article';


    public function search(string $search)
    {
        $query = "SELECT * FROM Article WHERE title LIKE :search";

        $statement = $this->pdo->prepare($query);

        $statement->bindValue(":search", "%{$search}%", PDO::PARAM_STR);
        $statement->execute();

        return $statement->fetchAll();
    }
}
