import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the call and WhatsApp links', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('ЭВАКУАТОР');

  const telLinks = document.querySelectorAll('a[href="tel:+996703214161"]');
  expect(telLinks.length).toBeGreaterThan(0);
  expect(screen.getAllByText('0703 214 161').length).toBeGreaterThan(0);

  const waHref = `https://wa.me/996703214161?text=${encodeURIComponent('Здравствуйте! Нужен эвакуатор.')}`;
  const waLinks = document.querySelectorAll(`a[href="${waHref}"]`);
  expect(waLinks.length).toBeGreaterThan(0);
  waLinks.forEach((a) => {
    expect(a).toHaveAttribute('target', '_blank');
    expect(a).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
