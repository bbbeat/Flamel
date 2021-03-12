<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\User;
use App\Models\Transaction;

class Message extends Model
{
    use HasFactory;

    public function sender() {
        return $this->belongsTo(User::class, 'from_user_id');
    }

    public function reciever() {
        return $this->belongsTo(User::class, 'to_user_id');
    }

    public function transaction() {
        return $this->belongsTo(Transaction::class);
    }
}
