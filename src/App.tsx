import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/forms/LoginForm';
import RegisterForm from './components/forms/RegisterForm';

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  );
}

export default App;
