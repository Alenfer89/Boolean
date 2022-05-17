@extends('layouts.main')

@section('title', 'Add your Comic')


@section('main-content')

<main>
    <form action="{{ route('comics.store') }}" method="post">
    @csrf
        <div class="input-group mb-3">
            <span class="input-group-text" id="title-add">Title</span>
            <input type="text" class="form-control" name='title' placeholder="title">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="description-add">description</span>
            <input type="text" class="form-control" name='description' placeholder="description">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="thumb-add">Thumb</span>
            <input type="text" class="form-control" name='thumb' placeholder="thumb">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="price-add">Price</span>
            <input type="number" step="0.01" class="form-control" name='price' placeholder="price">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="series-add">Series</span>
            <input type="text" class="form-control" name='series' placeholder="series">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="sale-date-add">Sale date</span>
            <input type="date" class="form-control" name='sale_date' placeholder="sale date">
        </div>
        <div class="input-group mb-3">
            <span class="input-group-text" id="type-add">Type</span>
            <input type="text" class="form-control" name='type' placeholder="type">
        </div>
        <div class="mb-3">
            <input type="submit" class="form-control" value="invia">
        </div>
        
    </form>
    
</main>


@endsection