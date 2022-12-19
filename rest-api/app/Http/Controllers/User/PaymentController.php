<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    protected $midtransServerKey = 'SB-Mid-server-54nK_ysA2hg9M-43lAt8yBau';
    protected $midtransIsProduction = false;
    
    protected function getDonation($inv)
    {
        $inv = Donation::findOrFail($inv);
        $inv_id = $inv->inv_id;
        $nominal = $inv->nominal;
        
        return [
            'inv_id' => $inv_id,
            'nominal' => $nominal                       
        ];
    }
    
    public function gopayGateaway($inv)
    {
        \Midtrans\Config::$serverKey = $this->midtransServerKey;
        \Midtrans\Config::$isProduction = $this->midtransIsProduction;

        $datas = $this->getDonation($inv);

        $params = array(
            'transaction_details' => array(
                'order_id' => $datas['inv_id'],
                'gross_amount' => $datas['nominal'],
            ),
            'payment_type' => 'gopay',
            'gopay' => array(
                'enable_callback' => true,                
                'callback_url' => 'someapps://callback'   
            )
        );

        try {
            $response = \Midtrans\CoreApi::charge($params);
    
            return response()->json([
                'message' => 'berhasil melakukan pembayaran',
                'data' => $response,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal melakukan pembayaran',
                'errors' => $e->getMessage(),
            ]);
        }
    }

    public function bniGateaway($inv)
    {
        \Midtrans\Config::$serverKey = $this->midtransServerKey;
        \Midtrans\Config::$isProduction = $this->midtransIsProduction;

        $datas = $this->getDonation($inv);
        
        $params = array(
            'payment_type' => 'bank_transfer',
            'transaction_details' => array(
                'order_id' => $datas['inv_id'],
                'gross_amount' => $datas['nominal'],
            ),
            'bank_transfer' => array(
                'bank' => 'bni',    
            )
        );

        try {
            $response = \Midtrans\CoreApi::charge($params);
    
            return response()->json([
                'message' => 'berhasil melakukan pembayaran',
                'data' => $response,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal melakukan pembayaran',
                'errors' => $e->getMessage(),
            ]);        }
    }
}
