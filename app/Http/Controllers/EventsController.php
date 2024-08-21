<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function index()
    {
        $events = Events::get();
        return response()->json([
            'result' => $events
        ], 200);
    }

    public function store(Request $request)
    {
        Events::create($request->all());
        $events = Events::get();
        return response()->json([
            'result' => $events
        ], 200);
    }
}
