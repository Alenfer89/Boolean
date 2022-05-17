@extends('layouts.main')

@section('title', 'Comics')


@section('main-content')
    <main>
        <h1>
            index
        </h1>
        @foreach ($comics as $comic)
        <pre>
            
            {{$comic['title']}}
        </pre>
        @endforeach
        
        <div>
            <a href="{{route('comics.show' , $comic->id)}}">
                <button>
                    show
                </button>
            </a>
        </div>
    </main>
@endsection