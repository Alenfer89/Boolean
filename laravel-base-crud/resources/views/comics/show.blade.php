@extends('layouts.main')

@section('title', 'Comics')


@section('main-content')
    <main>
        <div class="container-fluid px-5">
            <div class="row px-5">
                <div class="col-12 mb-4">
                    <h1 class="py-4">
                        {{ $comic->title }}
                    </h1>
                    <h4 class="pb-3">
                        {{ $comic->series }}
                    </h4>
                </div>
                <div class="col-4">
                    <img class="w-100" src="{{ $comic->thumb }}" alt="{{ $comic->title }} cover image">
                </div>
                <div class="col-4">
                    <p>
                        {{ $comic->description }}
                    </p>
                </div>
                <div class="col-4">
                    <p>
                        {{ $comic->price }}$
                    </p>
                    <p>
                        {{ $comic->type }}
                    </p>
                </div>
            </div>
        </div>
        <div>
            <a href="{{route('comics.index')}}">
                <button>
                    back
                </button>
            </a>
        </div>
    </main>
@endsection