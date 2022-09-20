import React, { Component } from 'react';
import Data from '../../static/data';
import './scrumboard.css'

export class ScrumBoard extends Component {
    constructor() {
      super();
      
      this.state = {
        data: Data,
        isOpen: false,
        task: null
      }
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        })
    }

    render() {
        console.log('logged in as', Data.name);
        return (
            <div className='scrumboard'>
                <nav>
                    <h1>CHATSCRUM</h1>
                    <div className='var'>
                        <p>User type:{Data.userType}</p>
                        <p>Project Name:{Data.projectType}</p>
                    </div>
                </nav>
                <p id='info'>Hello {Data.name}. Welcome to your scrumboard</p>

                <div className='container'>
                    <div className='weekly box'>
                        <h3>Weekly tasks</h3>
                        <p id='box'>{this.state.task}</p>
                    </div>
                    <div className='daily box'>
                        <h3>Daily Target</h3>
                    </div>
                </div>
                
                <div id='modal' className={this.state.isOpen ? 'show': 'hidden'}>
                    <div className='header'>
                        <h5>Add a new task</h5>
                        <h5 id='close' onClick={() => this.closeModal()}>X</h5>
                    </div>

                    <form onSubmit={this.handleSubmit}>
                        <input type='text' onChange={this.handleChange} />
                        <button>CONFIRM</button>
                    </form>
                </div>

                <button className='add' onClick={() => this.openModal()}>ADD TASK</button>
            </div>
        )
    }
}

export default ScrumBoard