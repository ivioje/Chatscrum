import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './users.css'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        let data;
        axios.get('http://liveapi.chatscrum.com/scrum/api/scrumusers/')
            .then(res => data = res.data)
            .then(() => setUsers(data))
    }, [setUsers])

    const toggleModal = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    return (
        <div className='main'>
            <h4 onClick={() => toggleModal()} >Connected Users</h4>
            <div id='userList' className={toggle ? 'show' : 'hidden'} >
                {users.map(({ nickname, id }) => {
                    return (
                        <p className='users' key={id}>
                            {nickname}
                        </p>
                    )
                })}
            </div>
        </div>
    )
}

export default Users