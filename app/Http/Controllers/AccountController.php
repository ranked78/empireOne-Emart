<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    public function index()
    {
        $accounts = Account::get();
        return response()->json([
            'result' => $accounts
        ], 200);
    }

    public function store(Request $request)
    {
        Account::create($request->all());
        $accounts = Account::get();
        return response()->json([
            'result' => $accounts
        ], 200);
    }

    public function update(Request $request, $id)
    {
        
        $account = Account::findOrFail($id);
        $account->update($request->all()); 
        $accounts = Account::all();
        return response()->json([
            'result' => $accounts
        ], 200);
    }

    public function destroy($id)
    {
        Account::where('id', $id)->delete();
        $accounts = Account::get();
        return response()->json([
            'result' => $accounts
        ], 200);
    }

}
