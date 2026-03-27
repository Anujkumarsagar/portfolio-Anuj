import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured') === 'true';
    const category = searchParams.get('category');
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;

    const query: any = {};
    if (featured) {
      query.featured = { equals: true };
    }
    if (category) {
      query.category = { equals: category };
    }

    const articles = await payload.find({
      collection: 'articles',
      where: query,
      sort: '-publishedAt',
      limit,
    });

    return NextResponse.json(articles.docs, { status: 200 });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const article = await payload.create({
      collection: 'articles',
      data: body,
    });

    return NextResponse.json(article, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json(
      { error: 'Failed to create article' },
      { status: 500 }
    );
  }
}
