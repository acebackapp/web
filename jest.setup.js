// Jest setup file
import '@testing-library/jest-dom';

// Mock the lightweight error reporter
jest.mock('@/lib/error-reporter', () => ({
  reportError: jest.fn(),
  setupErrorReporting: jest.fn(),
}));
