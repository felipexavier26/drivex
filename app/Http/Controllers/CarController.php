<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Veiculo;


class CarController extends Controller
{
    function home()
    {
        return Inertia::render('Home/Home');
    }

    function index()
    {
        return Inertia::render('Estoque/Estoque');
    }

    function show($id)
    {
        $veiculo = Veiculo::findOrFail($id); 
        return Inertia::render('Veiculos/Show', ['veiculo' => $veiculo]);
    }


    function financiamento()
    {
        return Inertia::render('Veiculos/Financiamento');
    }

    function contato()
    {
        return Inertia::render('Contato/Contato');
    }

    function empresa()
    {
        return Inertia::render('Empresa/Empresa');
    }

    function footer()
    {
        return Inertia::render('Footer/Footer');
    }
}
