import React from 'react';

import { useTodoListStore } from "../../zustand/root-zustand";

import './sidebar.styles.css';

const SideBar = ({todoLists}) => {
    const setCurrentTodoList = useTodoListStore(state => state.setCurrentTodoList);

    return (
        <div className="side-bar">
            {
                todoLists.map(todoList => (
                    <button
                        key={ todoList }
                        className="side-bar-option"
                        onClick={() => setCurrentTodoList(todoList)}
                    >{todoList}</button>
                ))
            }
        </div>
    );
}

export default SideBar;