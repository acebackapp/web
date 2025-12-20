'use client';

import * as Sentry from '@sentry/nextjs';

export default function TestSentryPage() {
  const triggerError = () => {
    try {
      throw new Error(`Test Sentry Error from Web ${Date.now()}`);
    } catch (error) {
      Sentry.captureException(error);
      alert('Error sent to Sentry! Check your dashboard.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-2xl font-bold">Sentry Test Page</h1>
      <button
        onClick={triggerError}
        className="rounded-lg bg-red-500 px-6 py-3 text-white hover:bg-red-600"
      >
        Trigger Test Error
      </button>
    </div>
  );
}
