<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Method_of_transfer;

class MethodOfTransferController extends Controller
{
    public function index() {
        $methods = Method_of_transfer::get();
        return $methods;
    }
}
