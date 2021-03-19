<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Listing;
use Auth;

class ListingController extends Controller
{
    public function create(Request $request )
    {
        $request['offer_or_request'] = $request['offer_or_request'] == "true";
            // $this->validate($request, [
            //     'rating' => 'required|numeric|min:0|max:100',
            //     'text' => 'required|max:1000'
            // ]);
            $user_id = Auth::id();
            $listing = new Listing;
            $listing->fill($request->all());
            $listing->user_id = $user_id;
            $listing->save();
            return [
                $listing->id
            ];
        
    }
    public function show($listing_id) {
        return Listing::with('comments.user')->with('comments')->with('method_of_transfer')->with('user')->with('location')->findOrFail($listing_id);
    }
}
