import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;

  // Allow access to the login page and API
  if (pathname.startsWith('/login') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check for 'access_granted' cookie
  const accessGranted = req.cookies.get('access_granted');

  if (!accessGranted || accessGranted.value !== 'true') {
    const loginUrl = new URL('/login', req.url);
    loginUrl.searchParams.set('redirectTo', pathname + search);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
      Match all routes except:
      - /_next/ (static files)
      - /login (auth page)
      - /api/ (API routes)
    */
    '/((?!_next/static|_next/image|favicon.ico|login|api).*)',
  ],
};
