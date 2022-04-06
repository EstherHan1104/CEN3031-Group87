import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/Dash.css';

const Dash = () => {
  const [data, setData] = useState({ courses: [] });
  
  useEffect(async () => {
    const result = await axios.post('http://localhost:5000/users/display', {
    email: localStorage.getItem('email')});

    setData(result.data);
  })

  return (
    <div>
      <div>
        {data.courses.length === 0 
        ? <div className="message">
            {localStorage.getItem('isTeacher') === 'true'
            ? <h1>You have not created any courses.</h1>
            : <h1>You are not enrolled in any courses.</h1>}
          </div>
        : data.courses.map(course => {
          return (
            <div className="course">
              <Link className="course-title" to={`/courses/${course._id}`}>
                <button className="btn-3">{course.courseName}</button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Dash;