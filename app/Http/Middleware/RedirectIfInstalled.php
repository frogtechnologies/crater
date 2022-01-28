<?php

namespace Crater\Http\Middleware;

use Closure;
use Crater\Models\Setting;
use Illuminate\Support\Facades\Storage;

class RedirectIfInstalled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (Storage::disk(config('filesystems.default'))->exists('database_created')) {
            if (Setting::getSetting('profile_complete') === 'COMPLETED') {
                return redirect('login');
            }
        }

        return $next($request);
    }
}
