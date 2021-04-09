import React, { useState } from 'react';
import './content.styles.css';

import uuid from 'react-uuid';

import { useTodoListStore, useTodoStore } from "../../zustand/root-zustand";

const Content = () => {
    const currentList = useTodoListStore(state => state.currentTodoList);

    const todos = useTodoStore(state => state.todos.filter(todo => todo.list === currentList));
    const addTodo = useTodoStore(state => state.addTodo);
    const removeTodo = useTodoStore(state => state.removeTodo);

    const selectedTodo = useTodoStore(state => state.selectedTodo);
    const selectTodo = useTodoStore(state => state.selectTodo);
    const unSelectTodo = useTodoStore(state => state.unSelectTodo);

    // const unsub1 = useTodoStore.subscribe(console.log);

    const createTodo = (title, list) => ({
        id: uuid(),
        title: title,
        list: list,
        description: 'TODO'
    })

    const [newTodoTitle, setNewTodoTitle] = useState('');
    return (
        <div className="main-content">
            <h1 className="full-width"></h1>
            {
                todos.map(todo =>
                    <div
                        key={todo.id}
                        onClick={() => {
                            if (!selectedTodo.includes(todo)){
                                selectTodo(todo.id);
                            } else {
                                unSelectTodo(todo.id);
                            }
                        }}
                        style={(selectedTodo.includes(todo) ? {'backgroundColor': 'blue'} : {})}
                    >
                        {todo.id}: {todo.title}
                    </div>)
            }
            <input type="text" value={newTodoTitle} onChange={event => setNewTodoTitle(event.target.value)}/>
            <div onClick={() => {
                addTodo(createTodo(newTodoTitle, currentList));
                setNewTodoTitle('');
            }}>
                {'+++'}
            </div>
            <div onClick={() => {
                removeTodo(selectedTodo[0]);
            }}>
                {'---'}
            </div>
        </div>
    )
}

export default Content;