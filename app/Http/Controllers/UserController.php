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

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $updateData = $request->only([
            'emp_id', 'position_id', 'site_id', 'name', 'email', 'points', 'position', 'phone', 'status'
        ]);

        
        if ($request->has('password') && !empty($request->password)) {
            $updateData['password'] = Hash::make($request->password);
        }

        // Update user
        $user->update($updateData);

        $users = User::all();

        return response()->json([
            'result' => $users
        ], 200);
    }

    public function destroy($id)
    {
        User::where('id', $id)->delete();
        $users = User::get();
        return response()->json([
            'result' => $users
        ], 200);
    }
    
}
