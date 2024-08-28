<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function index()
    {
        $events = Event::get();
        return response()->json([
            'result' => $events
        ], 200);
    }

    public function store(Request $request)
    {
        Event::create($request->all());
        $events = Event::get();
        return response()->json([
            'result' => $events
        ], 200);
    }
}
