import React, { useEffect, useState } from 'react';
import "./TodoList.css";
import { TodoListProps } from "./Model/TodoListProps";
import SingleTodo from '../SingleTodo/SingleTodo';

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {

  const [activeTaskCount, setactiveTaskCount] = useState<number>(0);
  const [completedTaskCount, setcompletedTaskCount] = useState<number>(0);

  useEffect(() => {
    setactiveTaskCount(todos.filter(todo => todo.isDone === false).length)
    setcompletedTaskCount(todos.filter(todo => todo.isDone === true).length)
    setTodos(todos.sort((task) => task.id))
}, [todos, setTodos])

return (
  <div className="allTodos">
    <div className="todolist-container">
      <h3>Active Tasks</h3>
      {
        (activeTaskCount === 0) ? (
          <h5>No active task available</h5>
        ) : todos.map((t) => (
          !t.isDone ?
            <SingleTodo
              todo={t}
              key={t.id}
              todos={todos}
              setTodos={setTodos}
            /> : ''
        ))
      }
    </div>
    <div className="todolist-container completed-list">
      <h3>Completed Tasks</h3>
      {
        (completedTaskCount === 0) ? (
          <h5>No completed task available</h5>
        ) : todos.map((t) => (
          t.isDone ?
            <SingleTodo
              todo={t}
              key={t.id}
              todos={todos}
              setTodos={setTodos}
            /> : ''
        ))
      }
    </div>
  </div>
)
}

export default TodoList