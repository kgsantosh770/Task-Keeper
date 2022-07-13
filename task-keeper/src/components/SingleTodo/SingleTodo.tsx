import React from 'react'
import { Task } from '../InputField/Model/InputFieldProps'
import { DeleteOutlined, ModeEditOutline, Done } from '@mui/icons-material';

interface Props {
    todo: Task
    todos: Task[]
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const tickButton = todo.isDone ? '' :
        (< span className="done" >
            <Done />
        </span >);

    return (
        <li className={`todo-item ${todo.isDone ? "task-done" : ''}`} key={todo.id} >
            {todo.todo}
            <span className="item-actions">
                <span className="edit">
                    <ModeEditOutline />
                </span>
                <span className="delete">
                    <DeleteOutlined />
                </span>
                {tickButton}
            </span>
        </li>
    )
}

export default SingleTodo   