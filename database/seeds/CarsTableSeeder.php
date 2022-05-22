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
            $car->porte = $faker->numberBetween(2, 5);
            $car->data_immatricolazione = $faker->date("Y-m-d");
            $car->marca = ucfirst($faker->randomElement(['renault','citroen','ford','maserati','hummer']));
            $car->alimentazione = $faker->randomElement(['Benzina','Diesel','GPL','Metano','Vino']);
            $car->prezzo = $faker->randomFloat(2,8000, 100000);
            switch ($car->marca) {
                case 'Renault':
                    $car->model = ucfirst($faker->randomElement(['twingo','megane','clio','capture','kadjar']));
                    break;
                case 'Citroen':
                    $car->model = ucfirst($faker->randomElement(['ax','ds 4','c2','c3','c4']));
                    break;
                case 'Ford':
                    $car->model = ucfirst($faker->randomElement(['impala','fiesta','focus','mondeo','puma']));
                    break;
                case 'Maserati':
                    $car->model = ucfirst($faker->randomElement(['ghibli','levante','grecale','Quattroporte GT']));
                    break;
                case 'Hummer':
                    $car->model = ucfirst($faker->randomElement(['h1','h2','h3']));
                    break;
            }
            $car->save();



        }
    }
}
