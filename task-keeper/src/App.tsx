import React, { useState } from 'react'
import "./App.css";
import InputField from './components/InputField/InputField'
import { Task } from './components/InputField/Model/InputFieldProps';
import TodoList from './components/TodoList/TodoList';

function App() {


  const [todoid, setTodoid] = useState<number>(1);
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);

  const handleAdd = (event:React.FormEvent) => {
    event.preventDefault();
    if (todo !== "") {
      const task = {
        id: todoid,
        todo: todo,
        isDone: false,
      }
      setTodos([...todos,task]);
      setTodoid(todoid+1);
      setTodo("");
    }
    console.log(todos);
    console.log(todoid);
  }

  return (
    <div className="components-container">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App