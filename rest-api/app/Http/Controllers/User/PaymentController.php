<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class PaymentController extends Controller
{
    protected $midtransMerchantId = 'G454167943';
    protected $midtransClientKey = 'SB-Mid-client-1yhv57pF7Yd2uTJh';
    protected $midtransServerKey = 'SB-Mid-server-54nK_ysA2hg9M-43lAt8yBau';
    
    protected function getDonation($inv)
    {
        $inv = Donation::findOrFail($inv);
        $inv_id = $inv->inv_id;
        $nominal = $inv->nominal;
        $name = $inv->name;
        
        return [
            'inv_id' => $inv_id,
            'nominal' => $nominal ,
            'name' => $name,                      
        ];
    }
    
    public function snapGateaway(Request $request)
    {
        \Midtrans\Config::$clientKey = $this->midtransClientKey;
        \Midtrans\Config::$serverKey = $this->midtransServerKey;
        \Midtrans\Config::$isProduction = false;
        \Midtrans\Config::$isSanitized = true;

        $datas = $this->getDonation($request->id);
        
        $params = array(
            'transaction_details' => array(
                'order_id' => $datas['inv_id'],
                'gross_amount' => $datas['nominal'],
            ),
            'customer_details' => array(
                'first_name' => $datas['name'],
            ),
            'enabled_payments' => array([
                'bca_va',
                'bni_va',
                'bri_va',
                'gopay',
            ])
        );

        try {
            $snapToken = \Midtrans\Snap::getSnapToken($params);

            return response()->json([
                'message' => 'berhasil melakukan pembayaran',
                'snapToken' => $snapToken,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal melakukan pembayaran',
                'errors' => $e->getMessage(),
            ]);
        }
    }
}
