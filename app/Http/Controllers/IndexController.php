<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        // return view('index.index');
        $mock_data= [1, 2, 3];
        return json_encode($mock_data);
    }

    public function home()
    {
        return view('index.home');
    }
}
