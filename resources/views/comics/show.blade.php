@extends('layouts.main')

@section('title', 'Comics')


@section('main-content')
    <main>
        <h1>
            show
        </h1>
        <div>
            <a href="{{route('comics.index')}}">
                <button>
                    back
                </button>
            </a>
        </div>
    </main>
@endsection