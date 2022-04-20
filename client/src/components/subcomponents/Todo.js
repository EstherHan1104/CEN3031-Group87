import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/CourseDash.css';

const Todo = (props) => {
    function onClick(id) {
      console.log(id);
      localStorage.setItem('id', id);
    }

    return (
    <div>
      <div className="class">
          <h2>{props.courseName}</h2>
          <div className="class-image">
            <div style={{padding: '160px 0 0 96px'}}>
              <Link to={`/courses/${props._id}`}>
                <button className='btn4' onClick={() => onClick(props._id)}>Enter</button>
              </Link>
            </div>
          </div>
      </div>
    </div>
    );
}

export default Todo;