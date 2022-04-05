import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';

const Dash = () => {
  const [data, setData] = useState({ courses: [] });
  
  useEffect(async () => {
    const result = await axios.post('http://localhost:5000/users/display', {
    email: localStorage.getItem('email')});

    setData(result.data);
  })

  return (
    <div>
      {data.courses.map(course => {
        return (
          <div>
            <h1>{course.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Dash;