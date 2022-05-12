@extends('layouts.main')


@section('main-content')

    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1>Our Movies</h1>
                </div>
                @foreach ($movies as $movie)
                    <div class="col-4">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title"> {{ $movie['title'] }} </h5>
                                <h6 class="card-subtitle mb-2 text-muted"> {{ $movie['original_title'] }} </h6>
                                <p class="card-text">Country: {{ $movie['nationality'] == 'american/british' ? '\'Murica' : 'Perfida Albione' }} </p>
                                <span href="#" class="card-link">Released: {{ $movie['date'] }} </span>
                                <span href="#" class="card-link">Score: {{ $movie['vote'] }} </span>
                            </div>
                        </div>
                    </div>
                @endforeach
                
            </div>
        </div>
    </main>
    
@endsection