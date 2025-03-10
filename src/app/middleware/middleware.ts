import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export function middleware() {
  // Ensure uploads directory exists
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads')
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}