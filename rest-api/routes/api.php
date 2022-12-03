<?php

use App\Http\Controllers\EmailVerificationController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FundraiserDetailController;
use App\Http\Controllers\FundraiserController;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
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



Route::prefix('auth')->group(function () {
    Route::post("/login", [UserController::class, "loginUser"]);
    Route::post("/registrasi", [UserController::class, "createUser"]);
});

Route::prefix('fundraiser')->group(function () {
    Route::post('/registrasi', [FundraiserController::class, 'createUser']);
    Route::post('/login', [FundraiserController::class, 'loginUser']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/fundraiser/registrasi-data', [FundraiserDetailController::class, 'createData']);
    Route::post('/fundraiser/logout', [FundraiserController::class, 'logoutUser']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post("/auth/logout", [UserController::class, "logoutUser"]);
    Route::delete('/auth/delete/{id}', [UserController::class, 'deleteUser']);
});


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
