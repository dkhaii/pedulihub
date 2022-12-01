<?php

use App\Http\Controllers\UserController;
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

Route::middleware('auth:sanctum')->group(function () {
    Route::post("/auth/logout", [UserController::class, "logoutUser"]);
    Route::delete('/auth/delete/{id}', [UserController::class, 'deleteUser']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
