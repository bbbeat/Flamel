<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function user()
    {
        $user = Auth::user();

        return [
            'user' => $user
        ];
    }

   
}
