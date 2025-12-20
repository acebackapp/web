'use client';

import { useEffect } from 'react';
import { setupErrorReporting } from '@/lib/error-reporter';

export function ErrorReporterInit() {
  useEffect(() => {
    setupErrorReporting();
  }, []);

  return null;
}
