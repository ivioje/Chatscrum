import React, { Component } from 'react'
import './App.css';
import Home from './components/Home/Home';
import SignIn from './components/sign-in/sign-in';
import SignUp from './components/sign-up/SignUp';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrumBoard from './components/scrumboard/ScrumBoard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/scrumboard' element={<ScrumBoard />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
