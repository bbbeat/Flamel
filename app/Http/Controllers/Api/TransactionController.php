<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Transaction;
use Auth;

class TransactionController extends Controller
{
    public function create(Request $request, $listing_id)
    {
            $user_id = Auth::id();
            $transaction = new Transaction;
            $transaction->b_user_id = $user_id;
            $transaction->listing_id =$listing_id;
            $transaction->price=$request->input("price");
            $transaction->save();
            return [
                $transaction->id
            ];
    }

    public function show($transaction_id) {
        return Transaction::with('listing.user')->with('user')->with('listing')->findOrFail($transaction_id);
    }
}
