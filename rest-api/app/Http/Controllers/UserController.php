<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => "required|string",
            "username" => "required|string|unique:users,username",
            "password" => "required|string|min:8",
            "role_id" => "required",
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
            $createdUser = User::create($validated);
        } catch (\Exception $e) {
            return response()->json([
                "message" => "gagal registrasi",
                "error" => $e->getMessage()
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response()->json([
            "message" => "berhasil registrasi",
            "data" => $createdUser,
        ], Response::HTTP_CREATED);
    }

    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "username" => "required|string",
            "password" => "required|string|min:8",
        ]);

        if($validator->fails()){
            return response()->json([
                "message" => "username atau password tidak di isi",
                "error" => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $user = User::where("username", $request->username)->first();

        if(!$user || !Hash::check($request->password, $user->password)){
            return response()->json([
                "message" => "user tidak di temukan"
            ], Response::HTTP_NOT_FOUND);
        }

        $token = $user->createToken($request->username)->plainTextToken;

        return response()->json([
            "message" => "berhasil login",
            "data" => $user,
            "token" => $token,
        ], Response::HTTP_OK);
    }

    public function logoutUser()
    {
        auth()->user()->currentAccessToken()->delete();

        return response()->json([
            "message" => "berhasil logout"
        ], Response::HTTP_OK);
    }

    public function deleteUser($id)
    {
        Gate::authorize('admin');
        
        $user = User::findOrFail($id);
        
        $user->delete();

        return response()->json([
            "message" => "berhasil menghapus user"
        ], Response::HTTP_OK);
    }
}
