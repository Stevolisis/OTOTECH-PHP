import { NextResponse } from "next/server"

export const config = {
  matcher: '/admin',
}

export default function middleware(req) {
    if (req.url.includes('/admin')) {
       return NextResponse.redirect('http://localhost:3000/')  
    }
}