import React, { useRef, useState } from 'react'
import "./SingleTodo.css"
import { Task } from '../InputField/Model/InputFieldProps'
import { DeleteOutlined, ModeEditOutline, Done, RemoveCircleOutline } from '@mui/icons-material';

interface Props {
    todo: Task
    todos: Task[]
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {

    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [editableTodo, setEditableTodo] = useState<string>(todo.todo)

    const enableEdit = () => {
        setIsEditable(true);
    }

    const handleDone = (id: number) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        ))
    }

    const handleDelete = (id: number) => {
        isEditable ? alert("complete the edit first") :
            setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) =>
            (todo.id === id) ? { ...todo, todo: editableTodo } : todo
        ))
        setIsEditable(false);
    }

    const todoEditInputRef = useRef<HTMLInputElement>(null);

    return (
        <li className={`todo-item ${todo.isDone ? "task-done" : ''}`} key={todo.id} >
            <form onSubmit={(e) => {
                handleEdit(e, todo.id);
                todoEditInputRef.current?.blur();
            }}>
                {
                    isEditable ? (
                        <div className='edit-container'>
                            <input
                                className='editableInput'
                                ref={todoEditInputRef}
                                type="text"
                                name="todo"
                                value={editableTodo}
                                onChange={(e) => setEditableTodo(e.target.value)} />
                            <button className='icon edit-done-button'>
                                <Done className='edit-done-icon' />
                            </button>
                        </div>
                    ) : (
                        todo.todo
                    )
                }

            </form>
            <span className="item-actions">
                {
                    (!isEditable && !todo.isDone) ? (
                        <span className="icon edit" onClick={() => enableEdit()}>
                            <ModeEditOutline />
                        </span>
                    ) : ''
                }

                <span className="icon delete" onClick={() => handleDelete(todo.id)}>
                    <DeleteOutlined />
                </span>
                {
                    isEditable ? '' : todo.isDone ? (
                        < span className="icon done" onClick={() => handleDone(todo.id)}>
                            <RemoveCircleOutline />
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