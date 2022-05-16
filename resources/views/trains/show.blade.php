@extends('layouts.main')

@section('title', "Train $train->train_code")


@section('main-content')
    
    <div class="p-5">
        <p>Treno con codice <span class="text-danger">{{ $train->train_code }}</span>, delle ore {{ substr($train->departure_at, 0, 5)  }} del {{ $train->day }}</p>
        <p>
            In partenza da {{ $train->dep_station }} per {{ $train->arr_station }}
        </p>
        <p>
            Operato da {{ $train->carrier }}
        </p>
        <p>
            Il suo posto è il numero {{ rand(1, 50) }} 
            del vagone <span class="text-success">
                {{ rand(1, $train->pax_carriage_nr) }}
            </span>
            di <span class="text-danger">
                {{ $train->pax_carriage_nr }}
            </span>
        </p>
        <p>
            @if ($train->is_canceled == 1)
                {{ 'E\' stato cancellato' }}
            @elseif($train->is_delayed == 1 )
                {{ 'Subirà un leggero ritardo' }}
            @elseif($train->is_delayed == 0 )
                {{ 'E\' in arrivo regolarmente su un binario a caso' }}
            @endif
        </p>
    </div>

@endsection