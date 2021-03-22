<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Listing;
use App\Models\Message;
use App\Models\User;

class Transaction extends Model
{
    use HasFactory;

    public function listing() {
        return $this->belongsTo(Listing::class);
    }

    public function messages() {
        return $this->hasMany(Message::class);
    }

    public function user() {
        return $this->belongsTo(User::class, "b_user_id");
    }
    
}