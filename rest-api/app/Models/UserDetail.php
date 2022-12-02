<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserDetail extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens,HasFactory, Notifiable;

    protected $fillable = [
        'email',
        'full_name',
        'address',
        'selfie_img',
        'ktp_img',
        'phone_number',
        'bank_name',
        'bank_account',
        'contract_file',
        'user_id',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
