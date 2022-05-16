<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTrainsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trains', function (Blueprint $table) {
            $table->id();
            $table->string('carrier' , 15);
            $table->string('dep_station' , 30);
            $table->string('arr_station' , 30);
            $table->date('day');
            $table->time('departure_at', 6);
            $table->time('arrival_at', 6);
            $table->string('train_code' , 10);
            $table->tinyInteger('pax_carriage_nr');
            $table->boolean('is_delayed');
            $table->boolean('is_canceled');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trains');
    }
}
