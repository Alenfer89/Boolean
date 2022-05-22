@extends('layouts.app')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h1>
                    modifica auto
                </h1>
            </div>
            <div class="col-12">
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ( $errors->all() as $error )
                                <li>
                                    {{$error}}
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endif
            </div>
            <div class="col-12">

            </div>
        </div>
    </div>
    
    
    <form action="{{route("cars.update", $car->id)}}" method="POST">
        @csrf
        @method('PUT')
        <div class="row">
            <div class="col-12">

                <label for="numero_telaio">Numero di telaio</label>
                <input type="text" name="numero_telaio" id="numero_telaio" value='{{ $car->numero_telaio }}'>
                @error('numero_telaio')
                    <h5 class="alert alert-danger">
                        {{ $message }}
                    </h5>
                @enderror
            </div>
        </div>
            <div class="row">
                <div class="col-12">

                    <label for="model">Modello</label>
                    <input type="text" name="model" id="model" value='{{ $car->model }}'>
                    @error('model')
                        <h5 class="alert alert-danger">
                            {{ $message }}
                        </h5>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-12">

                    <label for="porte">Porte</label>
                    <input type="text" name="porte" id="porte" value='{{ $car->porte }}'>
                    @error('porte')
                        <h5 class="alert alert-danger">
                            {{ $message }}
                        </h5>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-12">

                    <label for="data_immatricolazione">Immatricolazione</label>
                    <input type="date" name="data_immatricolazione" id="data_immatricolazione" value='{{ $car->data_immatricolazione }}'>
                    @error('data_immatricolazione')
                        <h5 class="alert alert-danger">
                            {{ $message }}
                        </h5>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-12">

                    <label for="marca">Marca</label>
                    <input type="text" name="marca" id="marca" value='{{ $car->marca }}'>
                    @error('marca')
                        <h5 class="alert alert-danger">
                            {{ $message }}
                        </h5>
                    @enderror
                </div>
            </div>
            <div class="row">
                <div class="col-12">

                    <label for="alimentazione">Alimentazione</label>
                    <input type="text" name="alimentazione" id="alimentazione" value='{{ $car->alimentazione }}'>
                    @error('alimentazione')
                        <h5 class="alert alert-danger">
                            {{ $message }}
                        </h5>
                    @enderror 
                </div>
            </div>
            <div class="row">
                <div class="col-12">

                    <label for="prezzo">Prezzo</label>
                    <input type="text" name="prezzo" id="prezzo" value='{{ $car->prezzo }}'>
                    @error('prezzo')
                        <h5 class="alert alert-danger">
                            {{ $message }}
                        </h5>
                    @enderror
                </div>
            </div>

        <button type="submit">Send</button>
    </form>
@endsection