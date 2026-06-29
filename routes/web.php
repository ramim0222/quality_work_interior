<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Front/Home');
});

Route::get('/services', function () {
    return Inertia::render('Front/Services/Index');
});

Route::get('/services/{slug}', function (string $slug) {
    return Inertia::render('Front/Services/Page', ['slug' => $slug]);
});

Route::get('/projects', function () {
    return Inertia::render('Front/Projects/Index');
});

Route::get('/projects/{slug}', function (string $slug) {
    return Inertia::render('Front/Projects/Page', ['slug' => $slug]);
});

Route::get('/about', function () {
    return Inertia::render('Front/About');
});

Route::get('/contact', function () {
    return Inertia::render('Front/Contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/admin/leads', function () {
    return Inertia::render('Admin/Leads');
})->middleware(['auth', 'verified'])->name('admin.leads');

Route::get('/admin/carousell-leads', function () {
    return Inertia::render('Admin/CarousellLeads');
})->middleware(['auth', 'verified'])->name('admin.carousell-leads');

Route::get('/admin/tracking', function () {
    return Inertia::render('Admin/Tracking');
})->middleware(['auth', 'verified'])->name('admin.tracking');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
