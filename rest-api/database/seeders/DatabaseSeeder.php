<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Role;
use App\Models\User;
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
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        // User::create([
        //     "name" => "Mordekhai Gerin",
        //     "username" => "gerinmordekhai",
        //     "email" => "mordekhaigerin@gmail.com",
        //     "password" => bcrypt("testing123") 
        // ]);

        // Role::insert([
        //     ['role_name' => 'Admin'],
        //     ['role_name' => 'Fundraiser'],
        //     ['role_name' => 'Donatur'],
        // ]);
        
        Category::insert([
            ['category_name' => 'Anak'],
            ['category_name' => 'Kemanusiaan'],
            ['category_name' => 'Pendidikan'],
            ['category_name' => 'Agama'],
            ['category_name' => 'Hewan'],
            ['category_name' => 'Kesehatan'],
        ]);
    }
}
