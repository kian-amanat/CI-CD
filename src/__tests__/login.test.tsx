import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../../app/login/page';

describe('Login Page', () => {
  test('shows error message when fields are empty', () => {
    render(<LoginPage />);
    
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByTestId('login-message')).toHaveTextContent(
      'Both fields are required'
    );
  });

  test('shows success message when email and password are provided', () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByPlaceholderText(/email address/i), {
      target: { value: 'test@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: '123456' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByTestId('login-message')).toHaveTextContent(
      'Login successful'
    );
  });
});
