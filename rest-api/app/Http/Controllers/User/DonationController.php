<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Donation;
use App\Models\RaiseFund;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Haruncpi\LaravelIdGenerator\IdGenerator;

class DonationController extends Controller
{
    public function createDonation(Request $request, $id)
    {   
        $getRaiseFund = RaiseFund::find($id);
        $getId = $getRaiseFund->id;
        
        $validator = Validator::make($request->all(), [
            'nominal' => 'required|integer',
            'message' => 'string',
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
        $invId = IdGenerator::generate([
            'table' => 'donations',
            'field' => 'inv_id',
            'length' => 10,
            'prefix' => 'INV-'
        ]);
        $transactionId = IdGenerator::generate([
            'table' => 'donations',
            'field' => 'transaction_id',
            'length' => 10,
            'prefix' => date('ym'),
        ]);

        try {
            $crateDonation = Donation::create([
                'inv_id' => $invId,
                'transaction_id' => $transactionId,
                'user_id' => $userId,
                'name' => $userName,
                'nominal' => $validated['nominal'],
                'message' => $validated['message'],
                'campaign_id' => $getId,
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'terdapat kesalahan dalam melakukan donasi, silahkan ulangi',
                'errors' => $e->getMessage(),
            ]);
        }

        if($crateDonation){
            $crateDonation = array(
                'inv_id' => $crateDonation['inv_id'],
                'user_id' => $crateDonation['user_id'],
                'name' => $crateDonation['name'],
                'nominal' => $crateDonation['nominal'],
                'message' => $crateDonation['message'],
                'campaign_id' => $crateDonation['campaign_id'],
            );
        }

        return response()->json([
            'message' => 'berhasil membuat donasi, silahkan lanjut ke menu pembayaran',
            'donasi' => $crateDonation,
        ], Response::HTTP_CREATED);
    }

    public function handlePaymentProcess(Request $request)
    {
        $notif = $request->getContent();
        $invId = $notif['inv_id'];
        $transactionId = $notif['transaction_id'];
        $statusCode = $notif['status'];

        $donation = Donation::where('inv_id', $invId)->where('transaction_id', $transactionId)->first();

        if (!$donation) {
            return response()->json([
                'message' => 'terjadi kesalahan dalam pembayaran atau pembayaran tidak valid'
            ]);
        }

        try {
            switch ($statusCode) {
                case '200':
                    $donation->status = 1;
                    break;
                
                case '201':
                    $donation->status = 0;
                    break;
                
                case '202':
                    $donation->status = 0;
                    break;   
            }

            $donation->save();

            return response()->json([
                'message' => 'ok'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'error',
                'errors' => $e->getMessage()
            ]);
        }
    }
}
