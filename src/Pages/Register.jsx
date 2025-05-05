import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/login');
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });


    if (errors[id]) {
      setErrors(prevErrors => ({ ...prevErrors, [id]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const existingUser = JSON.parse(localStorage.getItem('user'));

      if (existingUser && existingUser.email === formData.email) {
        alert('User already exists with this email.');
        setFormData({ name: '', email: '', password: '' });
        return;
      }

      localStorage.setItem('user', JSON.stringify(formData));
      alert('Registration successful!');
      setFormData({ name: '', email: '', password: '' });
      setErrors({});

      navigate('/login');
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: "10%" ,marginBottom:"20%"}}>
      <div className="row w-100 justify-content-center">
        <div className="col-md-6">
          <h4 className='text-center' style={{ color: "#0d4f36", fontWeight: "bold" }}>Customer Account</h4>
          <form className='mt-4' onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold fs-5">Full Name</label>
              <input type="text" id="name" className="form-control rounded-pill fw-bold fs-5"
                placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
              {errors.name && <div className="text-danger mt-1">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold fs-5">Email Address</label>
              <input type="email" id="email" className="form-control rounded-pill fw-bold fs-5"
                placeholder="Enter your email Id" value={formData.email} onChange={handleChange} />
              {errors.email && <div className="text-danger mt-1">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-bold fs-5">Password</label>
              <input type="password" id="password" className="form-control rounded-pill fw-bold fs-5"
                placeholder="Enter your password" value={formData.password} onChange={handleChange} />
              {errors.password && <div className="text-danger mt-1">{errors.password}</div>}
            </div>

            <div className="text-center">
              <button type="submit" className="btn px-4 py-2" style={{ backgroundColor: "#0d4f36", color: "white" }}>
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center">
          <h4 style={{ color: "#0d4f36", fontWeight: "bold" }}>Create an Account</h4>
          <p className='fs-5'>If you already have an account<br /> Login here</p>
          <button className="btn mt-2" style={{ width: '120px', backgroundColor: "#0d4f36", color: "white" }} onClick={handlelogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
