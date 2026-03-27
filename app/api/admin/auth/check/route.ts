import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('payload-token')?.value;

    if (!token) {
      return NextResponse.json(
        { message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const user = await payload.auth({
      collection: 'users',
      headers: { authorization: `Bearer ${token}` },
    });

    return NextResponse.json(
      {
        authenticated: true,
        user,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json(
      { message: 'Not authenticated' },
      { status: 401 }
    );
  }
}
