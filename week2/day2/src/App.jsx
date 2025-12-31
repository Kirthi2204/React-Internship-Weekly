import React, { useState } from "react";
import "./App.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({name: "", email: "", password: ""});
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%-*?&_#])[A-Za-z\d@$!%-*?&_#]{6,}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }else if (!emailPattern.test(formData.email)) {
    newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (!passwordPattern.test(formData.password)) {
    newErrors.password = " For Strong password must include letters, numbers, and special characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful!!");
      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Registation Form</h2>
        <form onSubmit={handleSubmit} noValidate>

          <div className="input-group">
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}/>
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="input-group">
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} autoComplete="off" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="input-group">
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} autoComplete="off" />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
