<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::get();
        return response()->json([
            'result' => $users
        ], 200);
    }

    public function store(Request $request)
    {
        User::create($request->all());
        $users = User::get();
        return response()->json([
            'result' => $users
        ], 200);
    }
}
