'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage('Both fields are required');
      return;
    }

    setMessage('Login successful');
  };

  return (
    <main style={{ padding: 40 }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"                 // <-- needed for Playwright
            placeholder="Email address"  // <-- matched by RTL
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>

        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"              // <-- needed for Playwright
            placeholder="Password"       // <-- matched by RTL
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>

        <br />

        <button type="submit">Login</button>
      </form>

{message && (
  <p role="alert" data-testid="login-message">
    {message}
  </p>
)}

    </main>
  );
}

