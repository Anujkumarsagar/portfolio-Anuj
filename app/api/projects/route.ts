import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured') === 'true';
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    const query: any = {};
    if (featured) {
      query.featured = { equals: true };
    }

    const projects = await payload.find({
      collection: 'projects',
      where: query,
      sort: '-publishedAt',
      limit,
    });

    return NextResponse.json(projects.docs, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const project = await payload.create({
      collection: 'projects',
      data: body,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    );
  }
}
