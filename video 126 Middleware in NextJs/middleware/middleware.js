// import { NextResponse } from 'next/server'

// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//     // return NextResponse.redirect(new URL('/home', request.url))
//     return NextResponse.json({message:'hello'})
// }

// // See "Matching Paths" below to learn more
// export const config = {
//     matcher: ['/about', '/about/:path*'], // Include both `/about` and `/about/:path*`
// }


import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/home', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}



