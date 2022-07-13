import React, { useRef } from "react"
import "./InputField.css"
import { Props } from "./Model/InputFieldProps";


const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form id="input-form" onSubmit={(e) => {
      handleAdd(e);
      inputRef.current?.blur();
    }} >
      <input
        ref={inputRef}
        type="text"
        name="todo-item"
        id="todo-item-input"
        placeholder="Enter task to add"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default InputField