import React from 'react';
import "./TodoList.css";
import { TodoListProps } from "./Model/TodoListProps";
import SingleTodo from '../SingleTodo/SingleTodo';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todolist-container">
      {todos.map((t) => (
        <SingleTodo
          todo={t}
          key={t.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList