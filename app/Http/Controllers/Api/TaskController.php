<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Task;
class TaskController extends Controller
{

    public function index()
    {
        $task = Task::all();
        return $task;
    }

    public function store(Request $request)
    {
        $task = new task();
        $task -> title = $request -> title;
        $task -> description = $request -> description;
        $task -> due_date = $request -> due_date;
        $task -> state = $request -> state;
        $task -> user_id = $request -> user_id;
        $task -> save();
    }

    public function show($user_id)
    {       
        $tasks = Task::where('user_id', $user_id)->get();
        return response()->json(['tasks' => $tasks]);
    }

    
    public function update(Request $request, $id)
    {
        $task = Task::findOrFail($request->$id);
        $request -> title = $task -> title;
        $request -> description = $task -> description;
        $request -> due_date = $task -> due_date;
        $request -> state = $task -> state;
        $request -> user_id = $task -> user_id;
        $task -> save();
        return $task;
    }


    public function destroy($id)
    {
        $task = Task::findOrFail($request->$id);
        $task -> delete();
    }
}
