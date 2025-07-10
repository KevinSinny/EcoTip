// src/components/SignUpPage.js
import React, { useState } from 'react';
import './Login.css';  // Import the CSS for styling

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="sign-up-container">
      <div className="form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="sign-up-btn">Sign Up</button>
        </form>
        <p className="toggle">Already have an account? Login</p>
        <div className="social-login">
          <button>F</button>
          <button>G</button>
          <button>T</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

