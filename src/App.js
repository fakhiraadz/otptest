import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Otpverify from './Otpverify';
import VerifyPage from './VerifyPage';
import Home from './Home'
import Register from './Register';

function App() {


  return (
    <>
    
    <Router>
      <Route path="/" exact render={() => <VerifyPage />} />
      <Route path="/otp" exact render={() => <Otpverify />} />
      <Route path="/register" exact render={() => <Register />} />
      <Route path="/home" exact render={() => <Home />} />
    </Router>
    </>
  );
}

export default App;
