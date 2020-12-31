import React from 'react';
import './todo.styles.css';

const Todo = ({name}) => (
    <div className="todo">
        <input type="checkbox"/>
        {name}
    </div>
)

export default Todo;
