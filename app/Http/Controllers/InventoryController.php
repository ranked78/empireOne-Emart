<?php

namespace App\Http\Controllers;

use App\Models\Inventory;
use Illuminate\Http\Request;

class InventoryController extends Controller
{
    public function index()
    {
        $inventories = Inventory::get();
        return response()->json([
            'result' => $inventories
        ], 200);
    }
    public function store(Request $request)
    {
        Inventory::create($request->all());
        $inventories = Inventory::get();
        return response()->json([
            'result' => $inventories
        ], 200);
    }

    public function update(Request $request, $id)
    {
        
        $inventory = Inventory::findOrFail($id);
        $inventory->update($request->all()); 
        $inventories = Inventory::all();
        return response()->json([
            'result' => $inventories
        ], 200);
    }

    public function destroy($id)
    {
        Inventory::where('id', $id)->delete();
        $inventories = Inventory::get();
        return response()->json([
            'result' => $inventories
        ], 200);
    }
    
}
