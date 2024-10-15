<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
})->name('axHome');

Route::get('/photos', function () {
    return view('photos');
})->name('axPhotos');

Route::get('/photosTest', function () {
    $data = [
        'pic' => 'https://media-assets.vanityfair.it/photos/614ca50c6a2ba0987b5e1cab/3:4/w_642,h_856,c_limit/Leo-DiCaprio.jpg'
    ];
    return view('photosTest', $data);
})->name('axPhotosTest');
