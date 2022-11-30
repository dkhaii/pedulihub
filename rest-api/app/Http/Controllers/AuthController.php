<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|string",
            "password" => "required|string"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "gagal login",
                "error" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }
        
        $user = User::where("email", $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
            "message" => "user tidak di temukan"
            ], Response::HTTP_NOT_FOUND);
        }
        
        $token = $user->createToken("sanctum_token")->plainTextToken;

        return response()->json([
            "message" => "berhasil login",
            "token" => $token
        ], Response::HTTP_OK);
    }

    public function logoutUser()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            "message" => "berhasil logout"
        ], Response::HTTP_OK);
    }
}
