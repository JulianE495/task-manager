<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
        'title' => 'required|string',
        'description' => 'required|string',
    ]);

    // Crear una nueva instancia de la tarea
    $task = new Task();
    $task->title = $request->input('title');
    $task->description = $request->input('description');
    $task->due_date = $request->input('due_date');
    $task->state = $request->input('state');
    $task->user_id = $request->user()->id;
    // Puedes añadir más propiedades según tus necesidades

    // Guardar la tarea en la base de datos
    $task->save();

    // Devolver una respuesta adecuada
    return response()->json(['message' => 'Tarea añadida correctamente'], 201);
    }
}
