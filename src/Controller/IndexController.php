<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class IndexController extends AbstractController
{
    public function index(Request $request){
        $request->isXmlHttpRequest();
        return $this->render('index.html.twig');

    }

    public function test(Request $request){
        return new Response('test');
    }
}