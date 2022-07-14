import React from 'react'
import { Task } from '../InputField/Model/InputFieldProps'
import { DeleteOutlined, ModeEditOutline, Done, RemoveCircleOutline } from '@mui/icons-material';

interface Props {
    todo: Task
    todos: Task[]
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ))
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id!==id));
    }

    return (
        <li className={`todo-item ${todo.isDone ? "task-done" : ''}`} key={todo.id} >
            {todo.todo}
            <span className="item-actions">
                <span className="icon edit">
                    <ModeEditOutline />
                </span>
                <span className="icon delete" onClick={()=>handleDelete(todo.id)}>
                    <DeleteOutlined />
                </span>
                {
                    todo.isDone ? (
                        < span className="icon done" onClick={() => handleDone(todo.id)}>
                            <RemoveCircleOutline  />
                        </span >
                    ) : (
                        < span className="icon" onClick={() => handleDone(todo.id)}>
                            <Done />
                        </span >
                    )
                }
            </span>
        </li>
    )
}

export default SingleTodo   