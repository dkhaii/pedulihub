<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'nominal',
        'status',
        'raise_fund_id',
    ];

    /**
     * The relationship between tables
     * 
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comment()
    {
        return $this->hasOne(Comment::class, 'raise_fund_id');
    }

    public function payment()
    {
        return $this->belongsTo(Payment::class);
    }
}
