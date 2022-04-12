import Todo from './component/Todo'

function App() {
  return (
  <div>
    <h1> Welcome to your Teacher Dashboard!</h1>
    <div id="layout">
    <Todo text='Class #1' /> 
    <Todo text='Class #2' />
    <Todo text='Class #3' />
    <Todo text='Class #4' />
    <Todo text='Class #5' />
    <Todo text='Class #6' />
    </div>
    
  </div>
  );
}

export default App;