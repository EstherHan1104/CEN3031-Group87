import React, { Component } from 'react';
import DashNavbar from '../subcomponents/DashNavbar';
import CourseContent from '../subcomponents/CourseContent';

export default class Course extends Component {
    render() {
        return (
            <div>
                <DashNavbar/>
                <CourseContent/>
            </div>
        )
    }
}

