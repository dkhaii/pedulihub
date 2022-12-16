<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'donation_id',
        'name',
        'nominal',
        'method',
        'status',
    ];

    /**
     * the realtion between tables
     * 
     */
    public function donations()
    {
        return $this->hasMany(Donation::class);
    }
}
