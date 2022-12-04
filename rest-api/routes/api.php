<?php

use App\Http\Controllers\User\UserController;
use App\Http\Controllers\Fundraiser\FundraiserDetailController;
use App\Http\Controllers\Fundraiser\FundraiserController;
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
});

Route::prefix('donasi')->middleware(['auth:sanctum'], ['verified'])->group(function () {
    Route::post("/logout", [UserController::class, "logoutUser"]);
    // Route::delete('/delete/{id}', [UserController::class, 'deleteUser']);
});

Route::prefix('fundraiser')->group(function () {
    Route::post('/registrasi', [FundraiserController::class, 'createUser']);
    
    Route::post('/login', [FundraiserController::class, 'loginUser']);
});

Route::prefix('fundraiser')->middleware('auth:sanctum')->group(function () {
    Route::get('/email/verify/{id}/{hash}', [FundraiserController::class, 'askToVerifyEmail'])
        ->middleware(['signed'])
        ->name('verification.verify');
    
    // Route::post('/registrasi', [FundraiserController::class, 'createUser']);
    // Route::post('/login', [FundraiserController::class, 'loginUser']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/fundraiser/registrasi-data', [FundraiserDetailController::class, 'createData']);
    Route::post('/fundraiser/logout', [FundraiserController::class, 'logoutUser']);
});



Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
