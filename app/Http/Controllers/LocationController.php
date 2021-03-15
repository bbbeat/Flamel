<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

class LocationController extends Controller
{
    public function index() {
        $locations = Location::get();
        return $locations;
    }
}
