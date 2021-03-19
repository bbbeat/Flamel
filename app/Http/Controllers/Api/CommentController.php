<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;
use Auth;

class CommentController extends Controller
{
    public function create(Request $request, $listing_id)
    {
        
        $request['offer_or_request'] = $request['offer_or_request'] == "true";
            // $this->validate($request, [
            //     'rating' => 'required|numeric|min:0|max:100',
            //     'text' => 'required|max:1000'
            // ]);
            $user_id = Auth::id();
            // $listing_id = Auth::id(); //??????????
            $comment = new Comment;
            $comment->fill($request->all());
            $comment->user_id = $user_id;
            $comment->listing_id =$listing_id;
            $comment->save();
            return [
                $comment->id
            ];
    }
    public function show($comment_id) {
        return Listing::with('user')->with('listing')->findOrFail($comment_id);
    }

}
