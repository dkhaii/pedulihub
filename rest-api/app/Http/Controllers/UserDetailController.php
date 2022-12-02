<?php

namespace App\Http\Controllers;

use App\Models\UserDetail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Gate;

class UserDetailController extends Controller
{
    public function registerFundraiser(Request $request)
    {
        Gate::authorize('fundraiser');
        
        $validator = Validator::make($request->all(), [
            'full_name' => "required|string",
            'address' => 'required|string',
            'selfie_img' => 'required|mimes:png,jpg,jpeg|max:5048',
            'ktp_img' => 'required|mimes:png,jpg,jpeg|max:5048',
            'phone_number' => 'required|string|max:12',
            'bank_name' => 'required|string',
            'bank_account' => 'required|string',
            'contract_file' => 'required|mimes:pdf|max:204800',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'Silahkan isi semua data',
                'errors' => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $validated = $validator->validated();
        
        $user = auth()->user()->id;
        
        try {
            $createdData = UserDetail::create([
                'full_name' => $validated['full_name'],
                'address' => $validated['address'],
                'selfie_img' => $validated['selfie_img'],
                'ktp_img' => $validated['ktp_img'],
                'phone_number' => $validated['phone_number'],
                'bank_name' => $validated['bank_name'],
                'bank_account' => $validated['bank_account'],
                'contract_file' => $validated['contract_file'],
                'user_id' => $user,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal resgistrasi',
                'errors' => $e->getMessage(),
            ], Response::HTTP_NOT_ACCEPTABLE);
        }

        return response()->json([
            'message' => 'berhasil registrasi sebagai fundraiser',
            'data' => $createdData,
        ], Response::HTTP_CREATED);
    }
}
