import React from 'react';

import './App.css';

import { useTodoListStore } from "./zustand/root-zustand";

import SideBar from "./components/sidebar/sidebar";
import Content from "./components/content/content";

function App() {
    const todoLists = useTodoListStore(state => state.todoLists);
    return (
        <div className="App">
            <SideBar todoLists={todoLists}/>
            <Content todoList={[]}/>
        </div>
    );
}

export default App;
