<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'donation_id',
        'raise_fund_id',
        'message',
    ];

    /**
     * the relation between tables
     * 
     */
    public function donation()
    {
        return $this->belongsTo(Donation::class,);
    }

    public function raiseFund()
    {
        return $this->belongsTo(RaiseFund::class);
    }
}
