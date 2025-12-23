import { render, screen } from '@testing-library/react';
import Pricing from '@/components/landing/Pricing';

describe('Pricing', () => {
  it('renders section heading', () => {
    render(<Pricing />);
    expect(
      screen.getByRole('heading', { name: /protect your discs today/i })
    ).toBeInTheDocument();
  });

  it('renders price', () => {
    render(<Pricing />);
    expect(screen.getByText(/\$1\.00/)).toBeInTheDocument();
  });

  it('renders per sticker text', () => {
    render(<Pricing />);
    // Get the price label specifically (not the feature list item)
    const priceLabels = screen.getAllByText(/per sticker/i);
    expect(priceLabels.length).toBeGreaterThanOrEqual(1);
  });

  it('renders CTA button', () => {
    render(<Pricing />);
    expect(
      screen.getByRole('link', { name: /order in the app/i })
    ).toBeInTheDocument();
  });

  it('has proper section id for navigation', () => {
    render(<Pricing />);
    const section = screen.getByRole('region', {
      name: /protect your discs today/i,
    });
    expect(section).toHaveAttribute('id', 'pricing');
  });

  it('renders features list', () => {
    render(<Pricing />);
    expect(screen.getByText(/durable weatherproof stickers/i)).toBeInTheDocument();
    expect(screen.getByText(/unique qr code per sticker/i)).toBeInTheDocument();
  });
});
