import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobileNumber: '',
    age: '',
    address: '',
    gender: 'male',
    occupation: ''
  });
  const navigate = useNavigate();




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const users = { ...formData };

 
  //   localStorage.setItem('users', JSON.stringify(users)); // Store in local storage
  //   navigate('/login');
  // };


  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(formData);
    setFormData({
      name: '',
      email: '',
      password: '',
      mobileNumber: '',
      age: '',
      address: '',
      gender: 'male',
      occupation: '',
    });
   
    
    localStorage.setItem('users', JSON.stringify(users));

    navigate('/login');
  };
  
  return (
    <div className="signup-container">
     
      <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="tel" name="mobileNumber" placeholder="Mobile Number" onChange={handleChange} required />
        <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
        <textarea name="address" placeholder="Address" onChange={handleChange} required />
        <select name="gender" onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input type="text" name="occupation" placeholder="Occupation" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>

      
     
    </div>
  );
};

export default Signup;
