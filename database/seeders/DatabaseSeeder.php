<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //  \App\Models\User::factory(30)->create();

        \App\Models\User::factory()->create([
            'name' => 'Julian',
            'last_name' => 'Emiliano',
            'email' => 'julian@test.com',
            'password' => bcrypt('12345678'),
            'image_path' => 'imagenes_perfil/1701265255.png',
        ]);

        
    }
}
