<?php

use App\Brand;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class BrandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 5 ; $i++) { 
            # code...
            $brand = new Brand();
            $brand->name = ucfirst($faker->unique()->randomElement(['renault','citroen','ford','maserati','hummer']));
            $brand->save();
        }
    }
}
