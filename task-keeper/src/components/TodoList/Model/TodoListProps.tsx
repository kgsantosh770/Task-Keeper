import { Task } from '../../InputField/Model/InputFieldProps';

export interface TodoListProps {
    todos: Task[];
    setTodos: React.Dispatch<React.SetStateAction<Task[]>>;
}