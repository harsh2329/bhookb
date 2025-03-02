import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Login from './Components/Forms/Login';
import Signup from './Components/Forms/Signup';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
