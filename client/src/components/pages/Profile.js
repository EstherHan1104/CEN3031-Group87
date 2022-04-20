import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import '../../css/DashNavbar.css';
import DashNavbar from '../subcomponents/DashNavbar';
import ProfileForm from '../subcomponents/ProfileForm';

const Profile = () => {
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
    <div>
        <DashNavbar/>
        <ProfileForm/>
    </div>
  )
}

export default Profile;