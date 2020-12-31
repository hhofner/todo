import React , { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './add-todo.styles.css'

import uuid from 'react-uuid';

const AddTodo = ({dispatcher}) => {

    return(
       <button className="add-todo" onClick={() => dispatcher({key: uuid(), content: "yes!"})}>
            <FontAwesomeIcon icon={faPlusSquare}/> Create a new task
        </button>
    )
}

export default AddTodo;
