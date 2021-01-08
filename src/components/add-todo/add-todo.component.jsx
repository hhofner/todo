import React , { useState } from 'react';

import { connect } from 'react-redux';
import { addTodo } from "../../redux/actions/todo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './add-todo.styles.css'

import uuid from 'react-uuid';

const AddTodo = ({addTodo, selectedTodoList}) => {

    return(
       <button className="add-todo" onClick={() => addTodo(
           {key: uuid(),
            list: [selectedTodoList]})
       }>
            <FontAwesomeIcon icon={faPlusSquare}/> Create a new task
        </button>
    )
}

const mapStateToProps = state => ({
    selectedTodoList: state.todoList.selectedTodoList
});

const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
