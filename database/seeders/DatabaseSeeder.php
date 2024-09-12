<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Account::factory(10)->create();

        User::factory()->create([
            'emp_id' => 123123,
            'position_id' => 321321,
            'site_id' => 1231231,
            'name' => 'Test User',
            'email' => 'test@example.com',
            'points' => 3213111,
            'position' => 'POS 5',
            'phone' => '09265354470',
            'status' => 'single',
            'password' => Hash::make('password'),
        ]);


    }
}
