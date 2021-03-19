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
use App\Models\Picture;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'location_id',
        'birth_date',
        'phone_number',
        'profile_picture',
        'bio',
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

    public function comments() {
        return $this->hasMany(Comment::class);
    }

    public function location() {
        return $this->belongsTo(Location::class);
    }

    public function transactions() {
        return $this->hasManyThrough(Transaction::class, Listing::class);
    }

    public function messages_sent() {
        return $this->hasMany(Message::class, 'from_user_id');
    }

    public function messages_recieved() {
        return $this->hasMany(Message::class, 'to_user_id');
    }

    public function listings() {
        return $this->hasMany(Listing::class);
    }

    public function pictures() {
        return $this->hasMany(Picture::class);
    }
}
