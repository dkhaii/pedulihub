<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use App\Models\RaiseFund;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class DonationController extends Controller
{
    public function createDonation(Request $request, $id)
    {   
        $getRaiseFund = RaiseFund::find($id);
        $getId = $getRaiseFund->id;
        
        $validator = Validator::make($request->all(), [
            'nominal' => 'required|integer',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'isi nominal dengan contoh seperti ini 2000000',
                'errors' => $validator->errors(),
            ]);
        }

        $validated = $validator->validated();

        $userId = Auth::user()->id;
        $userName = Auth::user()->name;

        try {
            $crateDonation = Donation::create([
                'user_id' => $userId,
                'name' => $userName,
                'nominal' => $validated['nominal'],
                'raise_fund_id' => $getId,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'terdapat kesalahan dalam melakukan donasi, silahkan ulangi',
                'errors' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'message' => 'berhasil membuat donasi, silahkan lanjut ke menu pembayaran',
            'donasi' => $crateDonation
        ], Response::HTTP_CREATED);
    }
}
