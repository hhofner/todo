import React, { useState } from 'react';
import './content.styles.css';

import { useTodoStore } from "../../zustand/root-zustand";

const Content = () => {
    const todos = useTodoStore(state => state.todos);
    const addTodo = useTodoStore(state => state.addTodo);
    const removeTodo = useTodoStore(state => state.removeTodo)

    const [newTodoTitle, setNewTodoTitle] = useState('');
    return (
        <div className="main-content">
            <h1 className="full-width"></h1>
            {
                todos.map(todo => <div>{todo.title}</div>)
            }
            <input type="text" value={newTodoTitle} onChange={event => setNewTodoTitle(event.target.value)}/>
            <div onClick={() => {
                addTodo({id: todos[todos.length - 1].id +1, title: newTodoTitle});
                setNewTodoTitle('');
            }}>
                {'+++'}
            </div>
            <div onClick={() => {
                removeTodo(todos[todos.length - 1]);
            }}>
                {'---'}
            </div>
        </div>
    )
}

export default Content;