<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Location;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Location::create([
            'city' => 'Prague'
        ]);

        Location::create([
            'city' => 'Brno'
        ]);

        Location::create([
            'city' => 'Ostrava'
        ]);

        Location::create([
            'city' => 'Plzeň'
        ]);

        Location::create([
            'city' => 'Liberec'
        ]);

        Location::create([
            'city' => 'Olomouc'
        ]);
    }
}
