import React, { useState } from 'react';
import './todo.styles.css';

import { connect } from 'react-redux';
import {completeSelectedTodo} from "../../redux/actions/todo";
import { useClickOutside } from "../../helpers/hooks/useClickOutside";

const Todo = ({todo, onUpdate, onCheckUpdate, completeTodo}) => {
    const [ todoText, setTodoText ] = useState(todo.content);
    const [ isExpanded, setIsExpanded ] = useState(true);

    const onChange = event => {
        setTodoText(event.target.value);
        onUpdate(event.target.value);
    }

    const clickOutsideRef = useClickOutside(() => setIsExpanded(false), isExpanded);

    return (
        <div
            className="todo"
            ref={clickOutsideRef}
        >
            <input type="checkbox"/>
            <div
                contentEditable
                className={isExpanded ? "expandedContent" : "notExpandedContent"}
                onClick={() => setIsExpanded(true)}
            >
                {todoText}
            </div>
            <div>
                {todo.list}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    completeTodo: todo => dispatch(completeSelectedTodo(todo))
});

export default connect(null, mapDispatchToProps)(Todo);

