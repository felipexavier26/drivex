<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/', [CarController::class, 'home'])->name('home');
Route::get('/estoque', [CarController::class, 'index'])->name('estoque.index');
Route::get('estoque/{id}', [CarController::class, 'show'])->name('estoque.show');
Route::get('/financiamento', [CarController::class, 'financiamento'])->name('financiamento.index');
Route::get('/contato', [CarController::class, 'contato'])->name('contato.index');
Route::get('/empresa', [CarController::class, 'empresa'])->name('empresa.index');
Route::get('/footer', [CarController::class, 'footer'])->name('footer.index');




require __DIR__.'/auth.php';
