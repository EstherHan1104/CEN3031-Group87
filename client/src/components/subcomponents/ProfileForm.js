import React, {useState, useEffect} from 'react';
import '../../css/DashNavbar.css';
import '../../css/Profile.css';
import default_profile from '../../images/default_profile.jpg';
import axios from 'axios';

const ProfileForm = () => {
    const [state, setState] = useState({});
    const [user, setUser] = useState(null); 

    useEffect(async () => {
        const promise = await axios.post('http://localhost:5000/users/find', 
                                        { email: localStorage.getItem('email') });

        const user = promise.data.user;

        setUser(user);
        setState({ firstName: state.firstName, lastName: state.lastName, username: state.username, email: state.email})
    }, [])

    function onChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function onClick(updateVar)  {
        console.log(updateVar);
        console.log(state);

        axios.post('http://localhost:5000/users/update', {
            email: user.email,
            update: updateVar,
            newValue: state[updateVar]
        })
    }

    return (
        <div>
            {
                user === null
                ? null
                : <div className="profile-form">
                    <h1 className = "title">Profile</h1>
                    <div><img src = {default_profile} width = "200" height = "200" alt = "profile"></img></div>
                    <button className = "changeButton"> Change Image </button>
                    <div>
                        <p className = "text1"> First Name: {user.firstName}</p>
                        <input className = "inputbox" name="firstName" placeholder = "New First Name" onChange={onChange}/>
                        <button className = "saveButton" onClick={() => onClick('firstName')}> Save </button>
                    </div> 
                    <div>
                        <p className = "text1"> Last Name: {user.lastName} </p>
                        <input className = "inputbox" name="lastName" placeholder = "New Second Name" onChange={onChange}/>
                        <button className = "saveButton" onClick={() => onClick('lastName')}> Save </button>
                    </div> 
                    <div>
                        <p className = "text1"> Username: {user.username} </p>
                        <input className = "inputbox" name="username" placeholder = "New Username" onChange={onChange}/>
                        <button className = "saveButton" onClick={() => onClick('username')}> Save </button>
                    </div> 
                    <div>
                        <p className = "text1"> Email: {user.email} </p>
                        <input className = "inputbox" name="email"placeholder = "New Email" onChange={onChange}/>
                        <button className = "saveButton"  onClick={() => onClick('email')}> Save </button>
                    </div>
                    <div>
                        <button className = "saveAllButton"> Save All </button>
                    </div> 
                 </div>
            }  
        </div>   
    )
}

export default ProfileForm;