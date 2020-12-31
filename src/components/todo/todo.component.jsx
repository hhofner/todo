import React from 'react';
import './todo.styles.css';

const Todo = () => (
    <div className="todo">
        <input type="checkbox"/>
        <input className="no-outline" placeholder="New Todo"/>
    </div>
)

export default Todo;
