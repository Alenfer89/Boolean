<?php

use Illuminate\Database\Seeder;
use App\Car;
use Faker\Generator as Faker;


class CarsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {

        for($i= 0; $i < 50; $i++){
            $car = new Car();
            $car->numero_telaio = $faker->bothify('?????-#####');
            $car->model = null;
            //ucfirst($faker->randomElement(['twingo','megane','clio','capture','kadjar', 'ax','ds 4','c2','c3','c4','impala','fiesta','focus','mondeo','puma','ghibli','levante','grecale','Quattroporte GT','h1','h2','h3']));
            $car->porte = $faker->numberBetween(2, 5);
            $car->data_immatricolazione = $faker->date("Y-m-d");
            $car->brand_id = $faker->numberBetween(1, 5);
            $car->alimentazione = $faker->randomElement(['Benzina','Diesel','GPL','Metano','Vino']);
            $car->prezzo = $faker->randomFloat(2, 8000, 100000);
            switch ($car->brand_id) {
                case 1:
                    $car->model = ucfirst($faker->randomElement(['twingo','megane','clio','capture','kadjar']));
                    break;
                case 2:
                    $car->model = ucfirst($faker->randomElement(['ax','ds 4','c2','c3','c4']));
                    break;
                case 3:
                    $car->model = ucfirst($faker->randomElement(['impala','fiesta','focus','mondeo','puma']));
                    break;
                case 4:
                    $car->model = ucfirst($faker->randomElement(['ghibli','levante','grecale','Quattroporte GT']));
                    break;
                case 5:
                    $car->model = ucfirst($faker->randomElement(['h1','h2','h3']));
                    break;
            }
            $car->save();



        }
    }
}
