import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', occupation: '', password: '', confirm: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = async e => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert('Passwords must match');
    const res = await fetch('http://127.0.0.1:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (res.ok) navigate('/login'); else alert('Registration failed');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
        <label>Mobile:</label>
        <input name="mobile" value={form.mobile} onChange={handleChange} />
        <label>Occupation:</label>
        <input name="occupation" value={form.occupation} onChange={handleChange} />
        <label>Password:</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} required />
        <label>Confirm Password:</label>
        <input type="password" name="confirm" value={form.confirm} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Sign in</Link></p>
    </div>
  );
}

export default RegisterPage;