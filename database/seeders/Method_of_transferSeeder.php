<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Method_of_transfer;

class Method_of_transferSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Method_of_transfer::create([
            'method' => 'Online' 
        ]);

        Method_of_transfer::create([
            'method' => 'In Person' 
        ]);
    }
}
