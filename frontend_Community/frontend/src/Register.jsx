import React, { useState } from 'react';
import api from './services/api';
import './css/Register.css'; // Importamos nuestro archivo CSS personalizado

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.users.register({ username, email, password });
      setUsername('');
      setEmail('');
      setPassword('');
      alert('¡Registro exitoso! Por favor inicia sesión.');
    } catch (error) {
      setError('Hubo un problema al registrar el usuario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuario</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
