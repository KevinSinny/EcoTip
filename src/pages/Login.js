// src/components/LoginPage.js
import React, { useState } from 'react';
import './Login.css';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div className={`auth-container ${showSignUp ? 'sign-up' : ''}`}>
      {!showSignUp && (
        <div className="form-container login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="toggle" onClick={() => setShowSignUp(true)}>Don't have an account? Sign Up</p>
        </div>
      )}

      {showSignUp && (
        <div className="form-container sign-up-form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="sign-up-btn">Sign Up</button>
          </form>
          <p className="toggle" onClick={() => setShowSignUp(false)}>Already have an account? Login</p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
