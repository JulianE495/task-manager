<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'description' => $this->description, // Asegúrate de que 'description' esté incluido en el array
            'due_date' => $this->due_date, // Asegúrate de que 'due_date' esté incluido en el array
            'state' => $this->state, // Asegúrate de que 'state' esté incluido en el array
            'user_id' => $this->user_id, // Asegúrate de que 'user_id' esté incluido en el array
        ];
    }
}
