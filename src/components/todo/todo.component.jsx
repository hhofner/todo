import React, { useState } from 'react';
import './todo.styles.css';

import AutoTextArea from "../auto-text-area/auto-text-area.component";

const Todo = ({todo, onUpdate}) => {
    const [todoText, setTodoText] = useState(todo.content);

    const onChange = event => {
        setTodoText(event.target.value);
        onUpdate(event.target.value);
        // Here maybe we make API calls to save state of to-do?
    }

    return (
        <div className="todo">
            <input type="checkbox"/>
            {/*<AutoTextArea/>*/}
            <textarea
                onClick={() => console.log("clicked")}
                value={todoText}
                onChange={onChange}
            >

            </textarea>
        </div>
    )
}

export default Todo;
