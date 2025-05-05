import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate('/register');
  };
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });

    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
      setErrorMessage('No user found, please register first!');
      return;
    }

    if (formData.email === storedUser.email && formData.password === storedUser.password) {
      alert('Login successful!');
      setErrorMessage('');
      navigate('/home');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: "10%", marginBottom: "20%" }}>
      <div className="row w-100 justify-content-center">
        <div className="col-md-6">
          <h4 className='text-center' style={{ color: "#0d4f36", fontWeight: "bold" }}>Customer Log In</h4>
          <form className='mt-4' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold fs-5">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control rounded-pill fw-bold fs-5"
                placeholder="Enter your email Id"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold fs-5">Password</label>
              <input
                type="password"
                id="password"
                className="form-control rounded-pill fw-bold fs-5"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
            </div>

            {errorMessage && <div className="text-danger text-center">{errorMessage}</div>}

            <div className="text-center">
              <button type="submit" className="btn px-4 py-2" style={{ backgroundColor: "#0d4f36", color: "white" }}>
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
          <h4 style={{ color: "#0d4f36", fontWeight: "bold" }}>Create an Account</h4>
          <p className='fs-5'>Sign Up for a new account</p>
          <button className="btn mt-2" style={{ width: '120px', backgroundColor: "#0d4f36", color: "white" }} onClick={handleRegisterClick}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
