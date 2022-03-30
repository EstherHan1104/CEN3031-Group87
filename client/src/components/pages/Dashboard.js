import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import '../../css/DashNavbar.css';

const Dashboard = () => {
    const history = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const user = decodeToken(token);

            if (!user) {
                localStorage.removeItem('token');
                history.replace('/');
            }
            else {
                axios.post('http://localhost:5000/users/', user, {
                    headers: {
                        'x-access-token': localStorage.getItem('token')
                    }
                })
                    .then(res => console.log(res.data))
            }
        }
    })

  return (
      
    <div className='DashNavbar'>
        <a
            className = "text"
            href = "Dashboard"
        >
            <button className='btn-2'>Dashboard</button>
        </a>
        <a
            className = "text"
            href = "Leaderboard"
        >
            <button className='btn-2'>Leaderboard</button>
        </a>
        
        <a
            className = "text"
            href = "Message"
        >
            <button className='btn-2'>Message</button>
        </a>

        <a
            className = "text"
            href = "Shop"
        >
            <button className='btn-2'>Shop</button>
        </a>

    </div>
  )
}

export default Dashboard;