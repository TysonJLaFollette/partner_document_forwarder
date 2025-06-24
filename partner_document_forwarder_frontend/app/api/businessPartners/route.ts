import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('http://localhost:5087/businessPartners');
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data: Record<number, string> = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching business partners:', error);
    return NextResponse.json({ error: 'Failed to fetch business partners' }, { status: 500 });
  }
}
