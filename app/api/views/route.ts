import { Redis } from '@upstash/redis';
import { NextResponse } from 'next/server';

// Use the KV_REST_API_* env vars injected by Vercel's Upstash integration
const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

// POST — increment & return count (called once per session)
export async function POST() {
  try {
    const count = await redis.incr('page_views');
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}

// GET — just read current count
export async function GET() {
  try {
    const count = (await redis.get<number>('page_views')) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: null }, { status: 500 });
  }
}
