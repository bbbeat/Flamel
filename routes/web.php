<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// api
Route::post('api/createlisting', 'Api\ListingController@create');

Route::post('api/createcomment/{listing_id}', 'Api\CommentController@create');

Route::get('/api/user', 'Api\UserController@user');

Route::get('/api/user/{user_id}', 'Api\UserController@show');

Route::get('/api/listing/', 'Api\ListingController@showAll');

Route::get('/api/listing/request', 'Api\ListingController@showRequest');

Route::get('/api/listing/offer', 'Api\ListingController@showOffer');

Route::get('/api/listing/{listing_id}', 'Api\ListingController@show');

// non api

Route::get('/', 'IndexController@home');

Route::get('locations', 'LocationController@index');

Route::get('methods', 'MethodOfTransferController@index');

Route::view('/login', 'auth/react')->name('login');

Route::view('/register', 'auth/react')->name('register');

Route::view('/createlisting', 'auth/react')->name('createlisting');

Route::view('/createcomment', 'auth/react')->name('createcomment');

Route::view('/listing/{listing_id}', 'auth/react');

Route::view('/user/{user_id}', 'auth/react');

Route::view('/listings', 'auth/react');

Route::view('/listings/offers', 'auth/react');

Route::view('/listings/requests', 'auth/react');

Route::view('/listing/{listing_id}/transaction/{transaction_id}', 'auth/react');


Route::get('/register', function() { // if logged-in redirect home

    if (Auth::check()) {
        return redirect('/');
    } else {
        return view('auth/react');
    }

})->name('register');

Route::get('/createlisting', function() {  // if not logged-in redirect home

    if (Auth::check()) {
        return view('auth/react');
    } else {
        return redirect('/');
    }

})->name('createlisting');

Route::get('/createcomment', function() {  // if not logged-in redirect home

    if (Auth::check()) {
        return view('auth/react');
    } else {
        return redirect('/');
    }

})->name('createcomment');