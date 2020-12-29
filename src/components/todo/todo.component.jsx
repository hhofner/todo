import React from 'react';
import './todo.styles.css';

const Todo = ({name}) => (
    <div className="todo">{name}</div>
)

export default Todo;