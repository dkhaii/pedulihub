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
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal melakukan pembayaran',
                'errors' => $e->getMessage(),
            ]);
        }

        // if($createPayment){
        //     $donation->status = '1';
        // }

        return response()->json([
            'message' => 'berhasil melakukan pembayaran',
            'payment' => $createPayment,
        ]);
    }

    public function gopayPayment($inv)
    {
        \Midtrans\Config::$serverKey = 'SB-Mid-server-54nK_ysA2hg9M-43lAt8yBau';
        \Midtrans\Config::$isProduction = false;

        $user = Auth::user();
        $userId = $user->id;
        $name = $user->name;
        $inv = Donation::find($inv);
        $inv_id = $inv->inv_id;
        $nominal = $inv->nominal;

        $params = array(
            'transaction_details' => array(
                'order_id' => $inv_id,
                'gross_amount' => $nominal,
            ),
            'payment_type' => 'gopay',
            'gopay' => array(
                'enable_callback' => true,                
                'callback_url' => 'someapps://callback'   
            )
        );

        $response = \Midtrans\CoreApi::charge($params);

        return response()->json([
            'message' => 'berhasil melakukan pembayaran',
            'data' => $response,
        ]);
    }
}
