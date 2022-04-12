import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import Todo from './Todo';
import axios from 'axios';
import '../../css/Dash.css';
import '../../css/CourseDash.css';

const Dash = () => {
  const [data, setData] = useState({ courses: [] });
  
  useEffect(async () => {
    const result = await axios.post('http://localhost:5000/users/display', 
                                    {email: localStorage.getItem('email')});

    setData(result.data);
  });

  return (
    <div className="main">
       <div>
         {data.courses.length === 0 
        ? null
        : data.courses.map((course, index) => {
          return (
            <div id="layout" key={index}>
              <Todo courseName={course.courseName} _id={course._id}/>
            </div>
          )
        })}
      </div>
    </div>
  )

  // return (
  //   <div className="main">
  //     <div>
  //       {data.courses.length === 0 
  //       ? null
  //       : data.courses.map((course, index) => {
  //         return (
  //           <div className="course" key={index}>
  //             <Link className="course-title" to={`/courses/${course._id}`}>
  //               <button className="btn-3" onClick={() => onClick(course._id)}>{course.courseName}</button>
  //             </Link>
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </div>
  // )
}

export default Dash;