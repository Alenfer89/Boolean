<?php

use App\Train;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
class TrainsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker )
    {
        for ($i=0; $i < 100 ; $i++) { 
            $newTrain = new Train();
            $newTrain->carrier = $faker->randomElement(['Tranitalia', 'Ytalo', 'Brecciarossa', 'Brecciargento', 'Regionalissimo']);
            $newTrain->dep_station = $faker->city();
            $newTrain->arr_station = $faker->city();
            $newTrain->day = $faker->date();
            $newTrain->departure_at = $faker->time();
            $newTrain->arrival_at = $faker->time();
            $newTrain->train_code = $faker->lexify('??????');
            $newTrain->pax_carriage_nr = $faker->numberBetween(5, 10);
            $newTrain->is_delayed = $faker->boolean();
            $newTrain->is_canceled = $faker->boolean();
        }
    }
}
