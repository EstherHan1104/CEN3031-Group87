import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Course = () => {
    const [course, setCourse] = useState([])

    useEffect(async () => {
        const course = await axios.post('http://localhost:5000/courses', 
                                        { _id: localStorage.getItem('id') });

        setCourse(course.data.course);
    });

    return (
        <div>
            <h1>{course.courseName}</h1>
        </div>
    )

    // return (    
    //     <div>
    //         {
    //             course !== null
    //             ? <div className="form">
    //                 <h1 className="logintitle">{course.courseName}</h1>
    //                 <h3 className="inline" style={{color: 'white'}}>{course.firstName} </h3>
    //                 <h3 className="inline" style={{color: 'white'}}>{course.lastName}</h3>
    //                 <br/><br/><br/><br/>
    //                 <ul>                
    //                     {Object.keys(course.qna).map((question, index) => {
    //                             return(
    //                                 <div key={index}>
    //                                     <h2 style={{color: 'white', fontWeight: 'normal'}}>
    //                                         {question}
    //                                     </h2>
    //                                     <br/>
    //                                     <input type="text" placeholder="Your Answer" className="inputbox1"/>
    //                                     <br/><br/>
    //                                 </div>
    //                             );
    //                         })                           
    //                     }
    //                 </ul>
    //                </div>
    //             : null
    //             }
    //     </div>
    // )
}

export default Course;