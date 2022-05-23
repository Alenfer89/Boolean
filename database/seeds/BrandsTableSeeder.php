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
        $brand = new Brand();
        $brand->name = ucfirst($faker->randomElement(['renault','citroen','ford','maserati','hummer']));
    }
}
