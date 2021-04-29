import React, { useState } from 'react';
import { useTodoStore } from "../../zustand/root-zustand";

import "./todo.styles.css";

const Todo = ({todo, onSelect, style}) => {
    const completeTodo = useTodoStore(state => state.completeTodo);

    const [ todoTitle, setTodoTitle ] = useState(todo.title);
    const [isCompleted, setIsCompleted ] = useState(todo.isComplete);

    return(
        <div
            className="flex-row rounded-border"
        >
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={() => {
                    setIsCompleted(true);
                    setTimeout(()=>completeTodo(todo), 300);
                }}
            />
            <div
                onClick={() => {
                    onSelect();
                }}
                style={style}
            >
                {todoTitle}
            </div>
            <div
                className="left-margin-auto"
            >
                ✖
            </div>
        </div>
    )
}

export {
    Todo,
}