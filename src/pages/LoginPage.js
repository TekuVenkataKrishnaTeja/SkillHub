import { useState } from 'react';
import logo from '../assets/logo.png';


function LoginPage({ onLogin, onNavigate }) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const handleSubmit = () => {
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }
    setError('');
    onLogin(email.split('@')[0]);
  };

  return (
    <div className="page-bg">
      <div className="card">

        {/* Logo */}
        <div className="logo-strip">
          <img src={logo} alt="Vasista logo" />
          <span className="brand">VASISTA SkillHub</span>
        </div>

        <h2 className="page-title">Sign In</h2>
        <p className="page-sub">Welcome back! Enter your credentials to continue.</p>

        {error && <p className="msg-error">{error}</p>}

        <div className="field">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSubmit}>
          Login →
        </button>

        <p className="switch-text">
          Don't have an account?{' '}
          <span onClick={() => onNavigate('register')}>Register here</span>
        </p>

        <p className="switch-text" style={{ marginTop: 8 }}>
          <span onClick={() => onNavigate('splash')}>← Back</span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
