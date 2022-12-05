<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RaiseFund extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'category_id',
        'funds',
        'title_img',
        'img1',
        'img2',
        'img3',
    ];

    
    /**
     * The relation between tables.
     * 
     */
    public function fundraiser()
    {
        return $this->belongsTo(Fundraiser::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
