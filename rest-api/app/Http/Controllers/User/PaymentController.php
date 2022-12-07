<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use App\Models\Payment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    public function createPayment(Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'method' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'message' => 'terjadi kesalahan dalam melakukan validasi data',
                'errors' => $validator->errors(),
            ]);
        }

        $validated = $validator->validated();

        $donation = Donation::find($id);
        $donationId = $donation->id;
        $donationName = $donation->name;
        $donationNominal = $donation->nominal;

        try {
            $createPayment = Payment::create([
                'donation_id' => $donationId,
                'name' => $donationName,
                'nominal' => $donationNominal,
                'method' => $validated['method'],
            ]);

            // if($createPayment){
            //     $donation->status = '1';
            // }
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal melakukan pembayaran',
                'errors' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'message' => 'berhasil melakukan pembayaran',
            'payment' => $createPayment,
        ]);
    }
}
