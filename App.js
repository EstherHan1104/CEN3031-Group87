import Todo from './component/Todo'

function App() {
  return (
  <div>
    <h1> Welcome to your Student Dashboard!</h1>
    <div id="layout">
    <Todo text='Course #1' /> 
    <Todo text='Course #2' />
    <Todo text='Course #3' />
    <Todo text='Course #4' />
    <Todo text='Course #5' />
    <Todo text='Course #6' />
    </div>

    
  </div>
  );
}

export default App;
