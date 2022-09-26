import React, { useState } from 'react';
import './scrumboard.css';
import Task from '../task/Task'
import AddTask from './addTask';

const ScrumBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [content, setContent] = useState('')
    const [tasks, setTasks] = useState([{task: '', id: ''}]);

    const addTask = task => {
      //task.id = ;
      const item = {task: task, id: Math.random().toString(36).slice(2, 9)}
        let newTasks = [...tasks, item];
        setTasks(newTasks)
        console.log(task, 'the task');
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

                <Task data={tasks} />
                <AddTask
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    content={content}
                    setContent={setContent}
                    addTask={addTask}
                />

            </div>
        </div>
    )
}

export default ScrumBoard