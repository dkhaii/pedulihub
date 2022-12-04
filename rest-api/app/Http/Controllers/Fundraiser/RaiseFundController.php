<?php

namespace App\Http\Controllers\Fundraiser;

use App\Http\Controllers\Controller;
use App\Models\RaiseFund;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class RaiseFundController extends Controller
{
    public function createRaiseFund(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string',
            'description' => 'required|string',
            'category_id' => 'required',
            'funds' => 'required|integer',
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
        $user = auth()->user()->id;

        try {
            $createData = RaiseFund::create([
                'user_id' => $user,
                'title' => $validated['title'],
                'description' => $validated['description'],
                'category_id' => $validated['category_id'],
                'funds' => $validated['funds'],
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

        if(!isset($datas)){
            return response()->json([
                'message' => 'belum ada data'
            ]);
        }

        return response()->json([
            'message' => 'menampilkan semua data',
            'data' => $datas,
        ], Response::HTTP_OK);
    }
}
