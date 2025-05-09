import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './authPages/signupPag.jsx';
import Login from './authPages/login';
import Success from './authPages/success.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/signup" />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Success' element={<Success/>}/>
      </Routes>
    </Router>
  );
}

export default App;


// export default App;


