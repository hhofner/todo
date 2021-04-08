import React from 'react';

import { Provider } from 'react-redux';

import './App.css';

import SideBar from "./components/sidebar/sidebar";
import Content from "./components/content/content";

function App() {
    return (
        <div className="App">
            <SideBar/>
            <Content todoList={[]}/>
        </div>
    );
}

export default App;
