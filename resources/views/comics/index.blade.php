@extends('layouts.main')

@section('title', 'Comics')


@section('main-content')
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Series</th>
                                <th scope="col">Type</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($comics as $comic)
                                <tr>
                                    <th scope="row">
                                        <a href="{{route('comics.show' , $comic->id)}}">
                                            {{ $comic->title }}
                                        </a>
                                    </th>
                                    <td>
                                        {{ $comic->series }}
                                    </td>
                                    <td>
                                        {{ $comic->type }}
                                    </td>
                                    <td>
                                        {{ $comic->price }}$
                                    </td>
                                </tr>
                                {{-- <pre>
                                    {{$comic['title']}}
                                </pre> --}}
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
        
        
        <div>
            <a href="{{route('comics.create')}}">
                <button>
                    create
                </button>
            </a>
        </div>
    </main>
@endsection