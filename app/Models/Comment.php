<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Listing;

class Comment extends Model
{
    use HasFactory;
    protected $fillable= ['comment'];
    

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function listing() {
        return $this->belongsTo(Listing::class);
    }
}
