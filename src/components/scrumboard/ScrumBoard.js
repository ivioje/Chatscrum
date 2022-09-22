import React, { useState } from 'react';
import './scrumboard.css'

const ScrumBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [task, setTask] = useState(null);


    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsOpen(false)
    }
    const name = localStorage.getItem('name');
    const userType = localStorage.getItem('userType');
    const projectName = localStorage.getItem('projectName');

    console.log('logged in as', name);
    return (
        <div className='scrumboard'>
            <nav>
                <h1>CHATSCRUM</h1>
                <div className='var'>
                    <p>User type: {userType}</p>
                    <p>Project name: {projectName}</p>
                </div>
            </nav>
            <div className='scrum_content'>
                <div className='welcome'>
                    <p id='info'>Hello {name}. Welcome to your scrumboard</p>
                </div>
                <div className='scrum_container'>
                    <div className='weekly box'>
                        <h3>Weekly tasks</h3>
                        <p id='box'>{task}</p>
                    </div>
                    <div className='daily box'>
                        <h3>Daily Target</h3>
                        <p></p>
                    </div>
                </div>

                <div id='modal' className={isOpen ? 'show' : 'hidden'}>
                    <div className='header'>
                        <h5>Add a new task</h5>
                        <h5 id='close' onClick={() => closeModal()}>close</h5>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input type='text' onChange={handleChange} />
                        <button>CONFIRM</button>
                    </form>
                </div>

                <button className='add' onClick={() => openModal()}>ADD TASK</button>
            </div>
        </div>
    )
}

export default ScrumBoard