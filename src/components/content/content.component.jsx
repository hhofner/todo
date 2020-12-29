import React, { useState } from 'react';
import './content.styles.css';

import Todo from "../todo/todo.component";
import AddTodo from "../add-todo/add-todo.component";

const Content = ({todoList}) => {
    const [todos, setTodos] = useState([]);
    return (
    <div className="main-content">
        <h1 className="full-width">{todoList}</h1>
        {todos.map((todo) => (
            <Todo name={todo}/>
        ))}
        <AddTodo/>
    </div>
    )
}

export default Content;
