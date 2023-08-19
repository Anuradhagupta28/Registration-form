import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Navbar from './Components/Navbar';
import Signup from './Components/Signup';
import AllRoute from './Allroute';
import Dashboard from './Components/Dashboard';
import AuthContextProvider from "./Contex/AuthContex"

function App() {

 

  return (
    <div className="App">
      <AuthContextProvider>
      <Navbar />
      <AllRoute/> 
      </AuthContextProvider>
     {/* <Dashboard/> */}
    </div>
  );
}

export default App;
