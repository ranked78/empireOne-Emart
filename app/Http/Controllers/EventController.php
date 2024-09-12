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

    public function update(Request $request, $id)
    {
        
        $event = Event::findOrFail($id);
        $event->update($request->all()); 
        $events = Event::all();
        return response()->json([
            'result' => $events
        ], 200);
    }

    public function destroy($id)
    {
        Event::where('id', $id)->delete();
        $events = Event::get();
        return response()->json([
            'result' => $events
        ], 200);
    }
}
