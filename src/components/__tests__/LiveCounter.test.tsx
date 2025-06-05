import { render, screen } from '@testing-library/react';
import { LiveCounter } from '../LiveCounter';

describe('LiveCounter', () => {
  it('renders formatted counter text', () => {
    render(<LiveCounter />);
    expect(screen.getByText(/earned by creators/i)).toBeInTheDocument();
  });
});
