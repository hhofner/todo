import React, {useEffect, useState} from 'react';
import './content.styles.css';

import uuid from 'react-uuid';

import { Todo } from "../todo/todo";

import { useTodoListStore, useTodoStore } from "../../zustand/root-zustand";

const Content = () => {
    const currentList = useTodoListStore(state => state.currentTodoList);

    const todos = useTodoStore(state => state.todos.filter(todo => todo.list === currentList && !todo.isComplete));
    const addTodo = useTodoStore(state => state.addTodo);
    const removeTodo = useTodoStore(state => state.removeTodo);

    const selectedTodo = useTodoStore(state => state.selectedTodo);
    const selectTodo = useTodoStore(state => state.selectTodo);
    const unSelectTodo = useTodoStore(state => state.unSelectTodo);

    const currentTodoList = useTodoListStore(state => state.currentTodoList);

    const createTodo = (title, list) => ({
        id: uuid(),
        title: title,
        list: list,
        description: 'TODO',
        isComplete: false,
    })

    const [ newTodoTitle, setNewTodoTitle ] = useState('');

    useEffect(() => {
        const listener = event => {
            console.log(event.code);
            if (event.code === "Enter") {
                event.preventDefault();
                if (newTodoTitle !== '') {
                    addTodo(createTodo(newTodoTitle, currentList));
                    setNewTodoTitle('');
                }
            }
        }
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        }
    }, [newTodoTitle]);

    return (
        <div className="main-content flex-col">
            <h1 className="full-width">{currentTodoList}</h1>
            <div>
                {
                    todos.map(todo =>
                        <Todo
                            todo={todo}
                            onSelect={() => {
                                if (!selectedTodo.includes(todo)){
                                    selectTodo(todo.id);
                                } else {
                                    unSelectTodo(todo.id);
                                }
                            }}
                            style={(selectedTodo.includes(todo) ? {'backgroundColor': 'blue'} : {})}
                            key={todo.id}
                        >
                        </Todo>
                    )
                }
            </div>
            <input type="text" value={newTodoTitle} onChange={event => setNewTodoTitle(event.target.value)}/>

            <div
                onClick={() => {
                    removeTodo(selectedTodo[0]);
                }}
                className="flex-row flex-justify-start"
            >
                {'---'}
            </div>
        </div>
    )
}

export default Content;