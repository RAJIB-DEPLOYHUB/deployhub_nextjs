import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    service: 'deployhub_nextjs',
    framework: 'Next.js 14 App Router',
    timestamp: new Date().toISOString()
  });
}
