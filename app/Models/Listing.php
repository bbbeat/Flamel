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
    protected $fillable= ['title', 'offer_or_request', 'description', 'location_id', 'method_of_transfer_id', 'price'];
    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function pictures() {
        return $this->hasMany(Picture::class);
    }

    public function method_of_transfer() {
        return $this->belongsTo(Method_of_transfer::class);
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function transactions() {
        return $this->hasMany(Transaction::class);
    }
}
