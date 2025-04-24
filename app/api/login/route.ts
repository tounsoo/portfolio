import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password }: { password: string } = await req.json();

  if (password === process.env.ACCESS_PASSWORD) {
    return NextResponse.json({ granted: true });
  }

  return NextResponse.json({ granted: false }, { status: 401 });
}
