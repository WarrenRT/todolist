import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./App.js";

function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'wake up',
      isCompleted: false,
    },
    {
      text: 'drink coffee',
      isCompleted: false,
    },
    {
      text: 'go to doc appointment',
      isCompleted: false,
    },        
    {
      text: 'apply for a job',
      isCompleted: false,
    }  
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  function Todo({todo,index,remove}){
    function handle(){
      remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} (-)</div>
  }

  return(
    <div className="app">
      <div className="todo-list" ><h2>*To Do List*</h2>
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);