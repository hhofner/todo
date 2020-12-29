import React from 'react';
import './content.styles.css';

import Todo from "../todo/todo.component";
import AddTodo from "../add-todo/add-todo.component";

const Content = ({todoList}) => (
    <div className="main-content">
        <h1 className="full-width">{todoList}</h1>
        <Todo name="finish this task"/>
        <Todo name="conquer the world"/>
        <AddTodo/>
    </div>
)

export default Content;