<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Fundraiser;
use App\Models\User;

class AdminController extends Controller
{
    public function loginAdmin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'username atau password tidak di isi',
                'errors' => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $admin = User::where('username', $request->username)->first();

        if(!$admin || !Hash::check($request->password, $admin->password || $admin->is_admin = 0)){
            return response()->json([
                'message' => 'user tidak di temukan',
            ], Response::HTTP_NOT_FOUND);
        }

        $token = $admin->createToken($request->username)->plainTextToken;

        return response()->json([
            'message' => 'berhasil login',
            'user' => $admin,
            'token' => $token,
        ], Response::HTTP_OK);
    }

    public function createAdmin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required|string",
            "username" => "required|string|unique:users,username",
            "password" => "required|string|min:8",
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "gagal registrasi",
                "errors" => $validator->errors()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $validated = $validator->validated();
        $validated["password"] = bcrypt($validated["password"]);
        
        try {
            $createdAdmin = User::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "gagal registrasi",
                "error" => $e->getMessage()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json([
            "message" => "berhasil registrasi",
            "data" => $createdAdmin,
        ], Response::HTTP_CREATED);
    }
}
