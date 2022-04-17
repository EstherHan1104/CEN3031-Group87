import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import axios from 'axios';
import '../../css/Dash.css';
import '../../css/CourseDash.css';

const Dash = () => {
  const [data, setData] = useState({ courses: [] });
  
  useEffect(async () => {
    const result = await axios.post('http://localhost:5000/users/find', 
                                    {email: localStorage.getItem('email')});

    setData(result.data);
  });

  function renderModules() {
    let elements = [];
    for (let i = 0; i < data.courses.length; i++) {
        elements.push( 
          <Todo courseName={data.courses[i].courseName} _id={data.courses[i]._id}/>   
        )
    }

    return elements;
  }

  return (
    <div>
      <div className="dash-bg">
         {data.courses.length === 0 
        ? null
        : <div className="container">
            {renderModules()}
          </div>
        }
      </div>
    </div>
  )
}

export default Dash;