<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Category;
use App\Models\Fundraiser;
use App\Models\RaiseFund;
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

        User::create([
            "name" => "admin",
            "username" => "admin",
            "password" => bcrypt("admin123") ,
            'is_admin' => 1
        ]);

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
