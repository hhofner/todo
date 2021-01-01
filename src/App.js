import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';

import SideBar from "./components/sidebar/sidebar.component";
import Content from "./components/content/content.component";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <SideBar/>
                <Content todoList={[]}/>
            </div>
        </Provider>
    );
}

export default App;
