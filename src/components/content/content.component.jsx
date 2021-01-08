import React from 'react';
import { connect } from "react-redux";
import './content.styles.css';

import AddTodo from "../add-todo/add-todo.component";
import TodoListContainer from "../todo-list-container/todo-list-container.component";

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
                <TodoListContainer />
                <AddTodo />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedTodoList: state.todoList.selectedTodoList
    }
};

export default connect(mapStateToProps)(Content)
