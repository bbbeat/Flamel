<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Listing;

class Method_of_transfer extends Model
{
    use HasFactory;

    public function listing() {
        return $this->belongsTo(Listing::class);
    }
}
