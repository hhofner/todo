import React, { useState } from 'react';
import { connect } from "react-redux";
import './content.styles.css';

import Todo from "../todo/todo.component";
import AddTodo from "../add-todo/add-todo.component";

import { addTodo } from "../../redux/actions/todo";

class Content extends React.Component{
    constructor(props) {
        super(props);
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log('You pressed enter')
        }
    }

    render() {
        return (
            <div className="main-content" tabIndex="0" onKeyDown={this.handleKeyPress}>
                <h1 className="full-width"><b>{this.props.selectedTodoList}</b></h1>
                {this.props.todos.map((todo) => (
                    <Todo name={todo.content} key={todo.key}/>
                ))}
                <AddTodo dispatcher={this.props.addTodo}/>
            </div>
        )
    }
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
