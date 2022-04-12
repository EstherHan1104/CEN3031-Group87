function Todo(props){
    return (
      <div className='class'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn'>Enter</button>
        </div>
      </div>
    );
}

export default Todo;