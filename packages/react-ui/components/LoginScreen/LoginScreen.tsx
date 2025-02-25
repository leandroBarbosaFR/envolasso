'use client';
import React, { useState } from 'react';

function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        transform: 'translate(0, 50%)'
      }}
    >
      {/* Login Card - Positioned Bottom Right */}
      <div
        style={{
          bottom: '10px',
          right: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '20px',
          width: '350px',
          border: '1px solid #ddd'
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: '600', color: '#333', textAlign: 'center' }}>
          Se connecter
        </h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#666' }}>
          Nouvel utilisateur?{' '}
          <a href="#" style={{ color: '#007BFF', fontWeight: '500' }}>
            Créer un compte
          </a>
        </p>

        <form onSubmit={handleLogin} style={{ marginTop: '20px' }}>
          {/* Email Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#555' }}>
              Adresse email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none'
              }}
              placeholder="email@example.com"
              required
            />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#555' }}>
              Mot de passe
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                outline: 'none'
              }}
              placeholder="••••••••"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '15px'
            }}
          >
            <label style={{ fontSize: '14px', color: '#555', display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              Rester connecté
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#007BFF',
              color: 'white',
              padding: '12px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Se connecter
          </button>
        </form>

        {/* Forgot Password */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#007BFF',
            marginTop: '15px',
            cursor: 'pointer'
          }}
        >
          Mot de passe oublié?
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '5px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '12px',
          color: '#999'
        }}
      >
        Envol © 2025
      </div>
    </div>
  );
}

export default LoginScreen;
