@extends('layouts.main')

@section('title', 'Trains')


@section('main-content')
    
    <div class="">
        <p><a href="">Treno</a> delle {{ substr($train->departure_at, 0, 5)  }} del {{ $train->day }}</p>
        <p>
            In partenza da {{ $train->dep_station }} per {{ $train->arr_station }}
        </p>
        <p>
            Operato da {{ $train->carrier }}
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