import { NextRequest, NextResponse } from 'next/server';

const SENTRY_HOST = 'o4510563703193600.ingest.us.sentry.io';
const SENTRY_PROJECT_ID = '4510563738124288';
const SENTRY_KEY = 'd49a3b76211657acb27bae4a1dcadbca';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();

    // Forward to Sentry
    const sentryResponse = await fetch(
      `https://${SENTRY_HOST}/api/${SENTRY_PROJECT_ID}/store/?sentry_key=${SENTRY_KEY}&sentry_version=7`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=UTF-8',
        },
        body,
      }
    );

    return new NextResponse(null, { status: sentryResponse.status });
  } catch {
    return new NextResponse(null, { status: 500 });
  }
}
