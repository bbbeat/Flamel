<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Listing;

class Method_of_transfer extends Model
{
    use HasFactory;

    protected $table = 'methods_of_transfers';
    
    public function listings() {
        return $this->hasMany(Listing::class);
    }
}
