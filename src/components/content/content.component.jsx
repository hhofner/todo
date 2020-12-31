import React, { useState } from 'react';
import { connect } from "react-redux";
import './content.styles.css';

import Todo from "../todo/todo.component";
import AddTodo from "../add-todo/add-todo.component";

import { addTodo } from "../../redux/actions/todo";

const Content = ({todos, selectedTodoList, addTodo}) => {
    return (
    <div className="main-content">
        <h1 className="full-width">{selectedTodoList}</h1>
        {todos.map((todo) => (
            <Todo name={todo.content} key={todo.key}/>
        ))}
        <AddTodo dispatcher={addTodo}/>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        todos: state.todos.todos,
        selectedTodoList: state.todoList.selectedTodoList
    }
};

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Content)
