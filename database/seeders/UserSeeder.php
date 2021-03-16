<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create a sample user
        User::create([
            'first_name' => 'John',
            'last_name' => 'Doe',
            'email' => 'john@doe.com',
            'location_id' => '1',
            'birth_date' => '01/01/2002',
            'phone_number' => '1111111111',
            'password' => Hash::make('1234567890'),
        ]);
    }
}
