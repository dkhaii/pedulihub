<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use App\Models\User;

class UserController extends Controller
{
    public function registrasi(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required|string",
            "username" => "required|string|unique:users,username",
            "email" => "required|string|email:rfc,dns|unique:users,email",
            "password" => "required|string"
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "gagal registrasi",
                "errors" => $validator->errors()
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        $validated = $validator->validated();
        $validated["password"] = bcrypt($validated["password"]);
        
        try {
            $createdUser = User::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "gagal registrasi",
                "error" => $e->getMessage()
            ]);
        }

        return response()->json([
            "message" => "berhasil registrasi",
            "data" => $createdUser
        ]);
    }
}
