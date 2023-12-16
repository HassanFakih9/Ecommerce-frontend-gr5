import React, { useState } from 'react';
import '../../Style/Dashboard.css';

const VendorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:8000/vendors/vendorLogin/${email}/${password}`);
      if (response.ok) {
        const data = await response.json();
       
        if (data && data.length > 0) {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);

          // Redirect to VendorDash page
          window.location.href = '/VendorDash';
        } else {
          alert('Incorrect email or password');
        }
      } else {
        throw new Error('Server error');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className='vendorLogin'>
      <div className='vendorLoginContainer'>
        <p className='logintitle'>Vendor Login</p>
        <input
          type='text'
          className='vendorlogin-input'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          className='vendorlogin-input'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='userLogin-btn' onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default VendorLogin;
