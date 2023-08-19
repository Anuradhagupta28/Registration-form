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
const [isPasswordValid, setIsPasswordValid] = useState(true);
const [isPasswordTouched, setIsPasswordTouched] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      

    }));
       
    if (name === 'password') {
      const isValid = passwordValidate(value);
      setIsPasswordValid(isValid);
    }

  };


  const passwordValidate=(password)=>{
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    return passwordRegex.test(password)
  }

  const handlePage=()=>{
    navigate('/login');
  }
  const handlePasswordFocus = () => {
    setIsPasswordTouched(true);
  };
  const handleInputFocus = () => {
    setIsPasswordTouched(false);  
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
        <img    
        width="100"
        height="80"
        
        src="https://www.linkpicture.com/q/kofluence_2_-removebg-preview.png"/>
      <h1>Sign Up</h1>
      <p className="small">Create a new account ,it's quick & easy</p>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleInputFocus} onFocus={handlePasswordFocus} required  />
        {
            !isPasswordValid && isPasswordTouched &&<span id="passwordCheck">
              *Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!
            </span>

        }
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
        <p onClick={handlePage} className="last">Already have an account?</p>

      </form>

      
     
    </div>
  );
};

export default Signup;
