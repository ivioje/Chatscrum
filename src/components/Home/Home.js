import React from 'react';
import './Home.css';
import '../../App.css'
import { Link } from 'react-router-dom';
import chat from '../../static/assets/chat.png' 

export default function Home() {
  return (
    <div>
        <h1>WELCOME TO CHATSCRUM</h1>
        <div className='links'>
            <h4><Link to='/signUp'>SIGN UP</Link> </h4>
            <h4><Link to='/signIn'>SIGN IN</Link> </h4>
        </div>
        <div className='image'>
            <img src={chat} alt='Chat' />
        </div>
    </div>
  )
}
