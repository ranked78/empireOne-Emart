<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function index(){
        $inventories = Inventory::get();
        return response()->json([
            'result' => $inventories
        ], 200);
    }
    public function store(Request $request){
       Inventory::create($request->all());
       $inventories = Inventory::get();
        return response()->json([
            'result' => $inventories
        ], 200);
    }
}
