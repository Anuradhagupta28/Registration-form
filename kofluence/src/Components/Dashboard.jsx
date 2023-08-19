import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    // const storedUser = JSON.parse(localStorage.getItem('users'));

    const storedUser = JSON.parse(localStorage.getItem('currentusers'));
    
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      
      <div className="user-details">
      <h1>User Details</h1>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Mobile Number:</strong> {userData.mobileNumber}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Occupation:</strong> {userData.occupation}</p>
      </div>
    </div>
  );
};

export default Dashboard;
