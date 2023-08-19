import React, { useState } from 'react';
import './Login.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Contex/AuthContex';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const {login,logout}=useContext(AuthContext)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePage=()=>{
    navigate('/');
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('users'))||[];
    const users=userData.find((el)=>{
         return el.email === formData.email && formData.password === el.password
    })
     
    localStorage.setItem('currentusers', JSON.stringify(users))

    if (users) {
      // if (formData.email === userData.email && formData.password === userData.password) {
       
        
        logout();
        navigate('/dashboard')
        // Perform additional actions, e.g., navigate to profile page
      } 
      else {
        setError('Invalid email or password');
      }
    
  };

  return (
    <div className="login-container">
     
      <form className="login-form" onSubmit={handleLogin}>
      <img    
        width="100"
        height="80"
        src="https://www.linkpicture.com/q/kofluence_2_-removebg-preview.png"/>
      <h1>Login</h1>
      <p  className="smalls">You can login now!</p>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        {error && <p className="error-message">{error}</p>}
        <p onClick={handlePage}  className="last">Sign up for kofluence</p>
      </form>
    </div>
  );
};

export default Login;
