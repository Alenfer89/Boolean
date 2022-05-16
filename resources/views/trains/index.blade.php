@extends('layouts.main')

@section('title', 'Trains')


@section('main-content')
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-5">
                    <h1>Our Trains</h1>
                </div>

                @foreach ($trains as $train)
                    <div class="col-3 mb-4 p-5">
                        <p><a href='{{url("/$train->id")}}'>Treno</a> delle {{ substr($train->departure_at, 0, 5)  }} del {{ $train->day }}</p>
                        <p>
                            In <a href="{{ route('trains.show', $train->id) }}">partenza</a> da {{ $train->dep_station }} per {{ $train->arr_station }}
                        </p>
                        <p>
                            Operato da {{ $train->carrier }}
                        </p>
                        <p>
                            @if ($train->is_canceled == 1)
                                <span class="text-danger">
                                    {{ 'E\' stato cancellato' }}
                                </span>
                            @elseif($train->is_delayed == 1 )
                                <span class="text-warning">
                                    {{ 'Subirà un leggero ritardo' }}
                                </span>
                            @elseif($train->is_delayed == 0 )
                                <span class="text-success">
                                    {{ 'E\' in arrivo regolarmente su un binario a caso' }}
                                </span>
                            @endif
                        </p>
                    </div>
                @endforeach
                
                <div class="col-12">
                    {{ $trains->links() }}
                </div>
            </div>
        </div>
    </main>
@endsection