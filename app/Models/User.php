<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

use App\Models\Comment;
use App\Models\Location;
use App\Models\Transaction;
use App\Models\Message;
use App\Models\Listing;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function comment() {
        return $this->hasMany(Comment::class);
    }

    public function location() {
        return $this->hasOne(Location::class);
    }

    public function transaction() {
        return $this->hasMany(Transaction::class);
    }

    public function message() {
        return $this->hasMany(Message::class);
    }

    public function listing() {
        return $this->hasMany(Listing::class);
    }
}
