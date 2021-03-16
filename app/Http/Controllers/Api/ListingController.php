<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Listing;

class ListingController extends Controller
{
    public function create(Request $request )
    {
        $request['offer_or_request'] = $request['offer_or_request'] == "true";

        
            // $this->validate($request, [
            //     'rating' => 'required|numeric|min:0|max:100',
            //     'text' => 'required|max:1000'
            // ]);
    
            $user_id = 1; // change to user_id when login works
    
            
            $listing = new Listing;
            $listing->fill($request->all());
            $listing->user_id = $user_id;
            $listing->save();
    
            return [
                $listing->id
            ];
        
    }
}
