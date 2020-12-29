import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './add-todo.styles.css'

const AddTodo = () => (
    <button className="add-todo">
        <FontAwesomeIcon icon={faPlusSquare}/> Create a new task
    </button>
)

export default AddTodo;