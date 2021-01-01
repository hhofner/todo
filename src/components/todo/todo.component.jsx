import React from 'react';
import './todo.styles.css';

import AutoTextArea from "../auto-text-area/auto-text-area.component";

const Todo = () => (
    <div className="todo">
        <input type="checkbox"/>
        <AutoTextArea/>
    </div>
)

export default Todo;
