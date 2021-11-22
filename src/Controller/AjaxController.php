<?php

namespace App\Controller;

use App\Model\ArticleManager;

class AjaxController extends AbstractController
{
    protected ArticleManager $articleManager;

    public function __construct()
    {
        parent::__construct();
        $this->articleManager = new ArticleManager();
    }
    public function articlesJson(): string
    {
        $articles = $this->articleManager->selectAll();

        return json_encode($articles);
    }

    public function randomArticleJson(): string
    {
        $article_id = rand(1, count($this->articleManager->selectAll()));

        return json_encode($this->articleManager->selectOneById($article_id));
    }

    public function searchArticlesJson(string $search)
    {
        return json_encode($this->articleManager->search($search));
    }

    public function getArticleByIdJson(int $id): string
    {
        //TODO
        return "$id";
    }
}
