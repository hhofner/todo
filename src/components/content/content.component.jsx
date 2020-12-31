import React, { useState } from 'react';
import { connect } from "react-redux";
import './content.styles.css';

import Todo from "../todo/todo.component";
import AddTodo from "../add-todo/add-todo.component";

const Content = ({todoList}) => {
    return (
    <div className="main-content">
        <h1 className="full-width">{"Today"}</h1>
        {todoList.map((todo) => (
            <Todo name={todo.name} key={todo.id}/>
        ))}
        <AddTodo/>
    </div>
    )
}

const mapStateToProps = state => {
    const { todos } = state;
    return { todos: todos }
};

export default connect(mapStateToProps)(Content)
