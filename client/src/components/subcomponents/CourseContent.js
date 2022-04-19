import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Course = () => {
    const [course, setCourse] = useState([])

    useEffect(async () => {
        const course = await axios.post('https://smartypants-project.herokuapp.com/courses', 
                                        { _id: localStorage.getItem('id') });

        setCourse(course.data.course);
    });

    return (
        <div>
            <h1>{course.courseName}</h1>
        </div>
    )
}

export default Course;