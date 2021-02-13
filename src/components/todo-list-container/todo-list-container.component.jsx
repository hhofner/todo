import React from 'react';
import Todo from "../todo/todo.component";

import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { selectTodosFromList } from "../../redux/selectors/todos.selectors";

const TodoListContainer = ({todos}) => {
    // Probably need a useEffect state here?
    return (
        <div>
            {todos.map((todo) => <Todo todo={todo} key={todo.key} onUpdate={text => todo.content = text}/>)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    todos: selectTodosFromList
})

export default connect(mapStateToProps)(TodoListContainer);