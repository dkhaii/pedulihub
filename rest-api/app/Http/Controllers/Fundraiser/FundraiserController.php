<?php

namespace App\Http\Controllers\Fundraiser;

use App\Http\Controllers\Controller;
use App\Models\FundraiserDetail;
use App\Models\Fundraiser;
use Illuminate\Auth\Events\Registered;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class FundraiserController extends Controller
{
    public function createUser(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'email' => 'required|string|email:rfc,dns|unique:fundraisers,email',
            'password' => 'required|string|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Silahkan isi semua data',
                'errors' => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $validated = $validator->validated();
        $validated['password'] = bcrypt($validated['password']);
        
        try {
            $createdUser = Fundraiser::create($validated);
            event(new Registered($createdUser));
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal resgistrasi',
                'errors' => $e->getMessage(),
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        return response()->json([
            'message' => 'berhasil registrasi',
            'data' => $createdUser,
        ], Response::HTTP_CREATED);
    }

    public function loginUser(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string',
            'password' => 'required|string|min:8',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'email atau password tidak di isi',
                'errors' => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $fundraiser = Fundraiser::where('email', $request->email)->first();

        if(!$fundraiser || !Hash::check($request->password, $fundraiser->password)){
            return response()->json([
                'message' => 'user tidak di temukan',
            ], Response::HTTP_NOT_FOUND);
        }

        $token = $fundraiser->createToken($request->email)->plainTextToken;

        return response()->json([
            'message' => 'berhasil login',
            'user' => $fundraiser,
            'token' => $token,
        ], Response::HTTP_OK);
    }

    public function askToVerifyEmail(EmailVerificationRequest $request)
    {
        $request->fulfill();

        return response()->json([
            'message' => 'Email anda berhasil diverifikasi'
        ], Response::HTTP_OK);
    }

    public function logoutUser()
    {
        auth()->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'berhasil logout',
        ], Response::HTTP_OK);
    }
}
