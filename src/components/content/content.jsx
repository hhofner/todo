import React, { useState } from 'react';
import './content.styles.css';

import uuid from 'react-uuid';

import { useTodoStore } from "../../zustand/root-zustand";

const Content = () => {
    const todos = useTodoStore(state => state.todos);
    const addTodo = useTodoStore(state => state.addTodo);
    const removeTodo = useTodoStore(state => state.removeTodo);

    const selectedTodo = useTodoStore(state => state.selectedTodo);
    const selectTodo = useTodoStore(state => state.selectTodo);

    const unsub1 = useTodoStore.subscribe(console.log);

    const [newTodoTitle, setNewTodoTitle] = useState('');
    return (
        <div className="main-content">
            <h1 className="full-width"></h1>
            {
                todos.map(todo =>
                    <div
                        key={todo.id}
                        onClick={() => {
                            selectTodo(todo.id);
                        }}
                        style={((selectedTodo.id === todo.id) ? {'backgroundColor': 'blue'} : {})}
                    >
                        {todo.id}: {todo.title}
                    </div>)
            }
            <input type="text" value={newTodoTitle} onChange={event => setNewTodoTitle(event.target.value)}/>
            <div onClick={() => {
                addTodo({id: uuid(), title: newTodoTitle});
                setNewTodoTitle('');
            }}>
                {'+++'}
            </div>
            <div onClick={() => {
                removeTodo(selectedTodo);
            }}>
                {'---'}
            </div>
        </div>
    )
}

export default Content;