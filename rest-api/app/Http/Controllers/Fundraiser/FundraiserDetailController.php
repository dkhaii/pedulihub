<?php

namespace App\Http\Controllers\Fundraiser;

use App\Http\Controllers\Controller;
use App\Models\FundraiserDetail;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class FundraiserDetailController extends Controller
{
    public function createData(Request $request)
    {   
        $validator = Validator::make($request->all(), [
            'full_name' => "required|string",
            'address' => 'required|string',
            'selfie_img' => 'required|mimes:png,jpg,jpeg|max:5048',
            'nik_ktp' => 'required|string',
            'ktp_img' => 'required|mimes:png,jpg,jpeg|max:5048',
            'phone_number' => 'required|string|max:12',
            'bank_name' => 'required|string',
            'bank_account' => 'required|string',
            'contract_file' => 'required|mimes:pdf|max:204800',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Silahkan isi semua data',
                'errors' => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $validated = $validator->validated();
        $validated['nik_ktp'] = bcrypt($validated['nik_ktp']);
        $validated['phone_number'] = bcrypt($validated['phone_number']);
        $validated['bank_account'] = bcrypt($validated['bank_account']);
        
        $user = auth()->user()->id;
        
        try {
            $createdData = FundraiserDetail::create([
                'user_id' => $user,
                'full_name' => $validated['full_name'],
                'address' => $validated['address'],
                'selfie_img' => $validated['selfie_img'],
                'nik_ktp' => $validated['nik_ktp'],
                'ktp_img' => $validated['ktp_img'],
                'phone_number' => $validated['phone_number'],
                'bank_name' => $validated['bank_name'],
                'bank_account' => $validated['bank_account'],
                'contract_file' => $validated['contract_file'],
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
