<?php

use App\Http\Controllers\Api\CarController;
use Illuminate\Support\Facades\Route;

Route::prefix('veiculos')->group(function () {
    Route::get('/', [CarController::class, 'index']);
    Route::post('/', [CarController::class, 'store']); 
    Route::get('/{id}', [CarController::class, 'show']); 
    Route::put('/{id}', [CarController::class, 'update']); 
    Route::delete('/{id}', [CarController::class, 'destroy']); 
});