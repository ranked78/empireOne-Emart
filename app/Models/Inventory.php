<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;
    protected $fillable = [
        'equipment_type',
        'site',
        'assigned',
        'brand',
        'model',
        'serial',
        'account',
        'status',
        'acount',
        'cost',
        'date_received',
    ];
}
