<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Comment;
use App\Models\Picture;
use App\Models\Method_of_transfer;
use App\Models\Location;
use App\Models\User;
use App\Models\Transaction;


class Listing extends Model
{
    use HasFactory;

    public function comment() {
        return $this->hasMany(Comment::class);
    }

    public function picture() {
        return $this->hasMany(Picture::class);
    }

    public function method_of_transfer() {
        return $this->hasOne(Method_of_transfer::class);
    }

    public function location() {
        return $this->hasOne(Location::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function transaction() {
        return $this->hasMany(Transaction::class);
    }
}
