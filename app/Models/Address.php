<?php

namespace Crater\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    use HasFactory;
    public const BILLING_TYPE = 'billing';
    public const SHIPPING_TYPE = 'shipping';

    protected $guarded = ['id'];

    public function getCountryNameAttribute()
    {
        return $this->country ? $this->country->name : null;
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }
}
