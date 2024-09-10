<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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
    
        $user = User::create([
            'emp_id' => $request->emp_id,
            'position_id' => $request->position_id,
            'site_id' => $request->site_id,
            'name' => $request->name,
            'email' => $request->email,
            'points' => $request->points,
            'position' => $request->position,
            'phone' => $request->phone,
            'status' => $request->status,
            'password' => Hash::make($request->password),
        ]);

        $users = User::get();

        return response()->json([
            'result' => $users
        ], 200);
        }
}
