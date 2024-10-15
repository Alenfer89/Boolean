<?php

namespace App\Http\Controllers;

use App\Train;
use Illuminate\Http\Request;

class TrainController extends Controller
{
    public function index(){
        $trains = Train::orderBy('day', 'desc')->orderBy('departure_at', 'desc')->paginate(20);
        return view('trains.index', ['trains'=> $trains]);
    }

    public function show($id){
        $singleTrain = Train::findOrFail($id);
        //$train = Train::findOrFail($id);
        return view('trains.show', ['train'=> $singleTrain]);
        //return view('trains.show', ['train'=> $train]);
    }
}
