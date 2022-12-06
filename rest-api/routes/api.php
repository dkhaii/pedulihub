<?php

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Fundraiser\FundraiserDetailController;
use App\Http\Controllers\Fundraiser\FundraiserController;
use App\Http\Controllers\Fundraiser\RaiseFundController;
use App\Http\Controllers\User\DonationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::prefix('donasi')->group(function () {
    Route::post("/login", [UserController::class, "loginUser"]);
    Route::post("/registrasi", [UserController::class, "createUser"]);
    Route::get('/pilihan-donasi', [RaiseFundController::class, 'showAll']);
    Route::post('/cari', [RaiseFundController::class, 'showByName']);
    Route::get('/cari/{id}', [RaiseFundController::class, 'showById']);
    
});

Route::prefix('donasi')->middleware(['auth:sanctum'])->group(function () {
    Route::post('/payment/{id}', [DonationController::class, 'createDonation']);
    Route::post("/logout", [UserController::class, "logoutUser"]);
});

Route::prefix('fundraiser')->group(function () {
    Route::post('/registrasi', [FundraiserController::class, 'createUser']);
    Route::post('/login', [FundraiserController::class, 'loginUser']);

    Route::middleware('auth:sanctum')->group(function () {
        Route::get('/email/verify', [FundraiserController::class, 'askToVerifyEmail'])
            ->name('verification.notice');
        Route::get('/email/verify/{id}/{hash}', [FundraiserController::class, 'verifyEmail'])
            ->middleware(['signed'])
            ->name('verification.verify');  
        Route::post('/logout', [FundraiserController::class, 'logoutUser']);

        Route::middleware('verified')->group(function () {
            Route::post('/registrasi-data', [FundraiserDetailController::class, 'createData']);
            Route::post('/galang-dana', [RaiseFundController::class, 'createRaiseFund']);
            Route::get('/list-galang-dana', [RaiseFundController::class, 'showAll']);
            Route::post('/list-galang-dana/cari', [RaiseFundController::class, 'showByName']);
            Route::get('/mypost', [FundraiserController::class, 'hasRaiseFund']);
        });
    });
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
