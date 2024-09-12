<?php

namespace App\Http\Controllers;

use App\Models\Site;
use Illuminate\Http\Request;

class SiteController extends Controller
{
    public function index()
    {
        $sites = Site::get();
        return response()->json([
            'result' => $sites
        ], 200);
    }

    public function store(Request $request)
    {
        Site::create($request->all());
        $sites = Site::get();
        return response()->json([
            'result' => $sites
        ], 200);
    }

    public function update(Request $request, $id)
    {
        
        $site = Site::findOrFail($id);
        $site->update($request->all()); 
        $sites = Site::all();
        return response()->json([
            'result' => $sites
        ], 200);
    }

    public function destroy($id)
    {
        Site::where('id', $id)->delete();
        $sites = Site::get();
        return response()->json([
            'result' => $sites
        ], 200);
    }

}
