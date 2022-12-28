<?php

namespace App\Http\Controllers\Fundraiser;

use App\Http\Controllers\Controller;
use App\Models\RaiseFund;
use Carbon\Carbon;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class RaiseFundController extends Controller
{
    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    
    public function createRaiseFund(Request $request)
    {
        Gate::authorize('accepted');
        
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'category_id' => 'required',
            'funds' => 'required|integer',
            'ends_at' => 'required',
            'title_img' => 'required|mimes:png,jpg,jpeg|max:5048',
            'img1' => 'required|mimes:png,jpg,jpeg|max:5048',
            'img2' => 'required|mimes:png,jpg,jpeg|max:5048',
            'img3' => 'required|mimes:png,jpg,jpeg|max:5048',
        ]);

        
        if($validator->fails()){
            return response()->json([
                'message' => 'Pastikan semua data di isi',
                'errors' => $validator->errors(),
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }
        
        $validated = $validator->validated();
        $currentDate = Carbon::now();
        if($request->ends_at != ''){
            //mingguan
            if ($request->ends_at == '1 minggu') {
                $currentDate->addWeeks(1);
            }
            elseif ($request->ends_at == '2 minggu') {
                $currentDate->addWeeks(2);
            }
            elseif ($request->ends_at == '3 minggu') {
                $currentDate->addWeeks(3);
            }
            
            //bulanan
            elseif ($request->ends_at == '1 bulan') {
                $currentDate->addMonths(1);
            }
            elseif ($request->ends_at == '2 bulan') {
                $currentDate->addMonths(2);
            }
        }
        $user = auth()->user()->id;
        $campaignId = IdGenerator::generate([
            'table' => 'raise_funds',
            'field' => 'campaign_id',
            'length' => 10,
            'prefix' => 'CMP-'
        ]);

        if ($validated['title_img']) {
            $fileName = $this->generateRandomString();
            $extension = $validated['title_img']->extension();

            $path = Storage::putFileAs('public/image', $validated['title_img'], $fileName.'.'.$extension);
            $link = Storage::url($path);
            $validated['title_img'] = $link;
        }
        if ($validated['img1']) {
            $fileName = $this->generateRandomString();
            $extension = $validated['img1']->extension();

            $path = Storage::putFileAs('public/image', $validated['img1'], $fileName.'.'.$extension);
            $link = Storage::url($path);
            $validated['img1'] = $link;
        }
        if ($validated['img2']) {
            $fileName = $this->generateRandomString();
            $extension = $validated['img2']->extension();

            $path = Storage::putFileAs('public/image', $validated['img2'], $fileName.'.'.$extension);
            $link = Storage::url($path);
            $validated['img2'] = $link;
        }
        if ($validated['img3']) {
            $fileName = $this->generateRandomString();
            $extension = $validated['img3']->extension();

            $path = Storage::putFileAs('public/image', $validated['img3'], $fileName.'.'.$extension);
            $link = Storage::url($path);
            $validated['img3'] = $link;
        }
        
        try {
            $createData = RaiseFund::create([
                'campaign_id' => $campaignId,
                'user_id' => $user,
                'title' => $validated['title'],
                'description' => $validated['description'],
                'category_id' => $validated['category_id'],
                'funds' => $validated['funds'],
                'ends_at' => $currentDate,
                'title_img' => $validated['title_img'],
                'img1' => $validated['img1'],
                'img2' => $validated['img2'],
                'img3' => $validated['img3'],
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'gagal membuat postingan',
                'errors' => $e->getMessage(),
            ]);
        }

        return response()->json([
            'message' => 'berhasil membuat postingan',
            'data' => $createData,
        ], Response::HTTP_CREATED);

    }

    
    public function showAll()
    {
        $datas = RaiseFund::all();
        
        if (!isset($datas)) {
            return response()->json([
                'message' => 'belum ada data'
            ]);
        }
        
        return response()->json([
            'message' => 'menampilkan semua data',
            'data' => $datas,
        ], Response::HTTP_OK);
    }
    
    public function showByName(Request $request)
    {
        $datas = RaiseFund::all();
    
        if ($request->keyword != '') {
            $datas = RaiseFund::where('title', 'LIKE', $request->keyword.'%')->get();
            
            return response()->json([
                'message' => 'menampilkan data berdasarkan judul',
                'data' => $datas,
            ]);
        }
        
        return response()->json([
            'message' => 'menampilkan semua data',
            'data' => $datas
        ]);
    }

    public function showById($id)
    {
        $data = RaiseFund::where('id', $id)->get();

        return response()->json([
            'message' => 'berhasil memilih data donasi',
            'data' => $data,
        ]);
    }
}
