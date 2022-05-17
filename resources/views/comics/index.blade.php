@extends('layouts.main')

@section('title', 'Comics')


@section('main-content')
    <main>
        <h1>
            index
        </h1>
        <div>
            <a href="{{url("comics.show")}}">
                <button>
                    show
                </button>
            </a>
        </div>
    </main>
@endsection