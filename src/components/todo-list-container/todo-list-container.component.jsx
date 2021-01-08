import React from 'react';
import Todo from "../todo/todo.component";

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTodosFromList } from "../../redux/selectors/todos.selectors";

const TodoListContainer = ({todos}) => {
    console.log("hey", todos);
    return (
    <div>
        {todos.map((todo) => <Todo name={todo.content} key={todo.key}/>)}
    </div>
)
}

const mapStateToProps = createStructuredSelector({
    todos: selectTodosFromList
})

export default connect(mapStateToProps)(TodoListContainer);