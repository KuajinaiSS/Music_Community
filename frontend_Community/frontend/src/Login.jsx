import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css'; // Importar el archivo CSS para estilos

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulación de autenticación exitosa
    if (email === 'user@example.com' && password === 'password') {
      setLoggedIn(true);
    }
  };

  if (loggedIn) {
    // Si el usuario está autenticado, mostrar un mensaje de bienvenida
    return (
      <div className="login-container">
        <h2>Bienvenido, Usuario</h2>
        <p>Has iniciado sesión correctamente.</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
