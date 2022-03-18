import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';

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
    <div>Dashboard</div>
  )
}

export default Dashboard;