<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class UserController extends Controller
{

    public function user()
    {
        $user = Auth::user();
        return [
            'user' => $user
        ];
    }
    public function show($user_id) {
        return User::with('location')->with('transactions')->with('messages_sent')->with('messages_recieved')->with('listings')->with('pictures')->findOrFail($user_id);
    }

   
}
