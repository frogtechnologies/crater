<?php

namespace Crater\Http\Middleware;

use Closure;
use Crater\Models\Setting;
use Illuminate\Support\Facades\Storage;

class InstallationMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        if (! Storage::exists('database_created')) {
            return redirect('/installation');
        }

        if (Storage::exists('database_created')) {
            if (Setting::getSetting('profile_complete') !== 'COMPLETED') {
                return redirect('/installation');
            }
        }

        return $next($request);
    }
}
