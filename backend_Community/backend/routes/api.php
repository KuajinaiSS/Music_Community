<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\MusicListController;



// http://localhost:8000/api/users
// retorna todos los usuarios de la base de datos
Route::get('/users', [UserController::class, 'index']);

// http://localhost:8000/api/users/1
// retorna el usuario con una id que se le pase por parametro en la url
Route::get('/users/{id}', [UserController::class, 'show']);

// http://localhost:8000/api/users
// crea un nuevo usuario en la base de datos con los datos (nombre, email, password) que se le pasen por parametro en el body de la peticion
Route::post('/users', [UserController::class, 'store']);



// http://localhost:8000/api/upload
Route::post('/upload', [MusicController::class, 'store']);

// http://localhost:8000/api/songs
Route::get('/songs', [MusicController::class, 'songs']);

// http://localhost:8000/api/play/1
Route::get('/play/{id}', [MusicController::class, 'playSong']);



// http://localhost:8000/api/musiclist
Route::get('/musiclist', [MusicListController::class, 'index']);

// http://localhost:8000/api/musiclist/1
Route::get('/musiclist/{id}', [MusicListController::class, 'show']);

// http://localhost:8000/api/musiclist
Route::post('/musiclist', [MusicListController::class, 'store']);


