@extends('layouts.main')

@section('title', 'Comics')


@section('main-content')
    <main>
        <h1>
            index
        </h1>
        <pre>
            {{var_dump($comics)}}
        </pre>
        <div>
            <a href="{{route('comics.show')}}">
                <button>
                    show
                </button>
            </a>
        </div>
    </main>
@endsection