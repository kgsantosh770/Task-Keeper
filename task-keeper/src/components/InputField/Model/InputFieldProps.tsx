import React from "react";

export interface Task {
    id: number;
    todo: string;
    isDone: boolean;
}

export interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (event:React.FormEvent) => void;
}