import './App.css';
import {useState} from 'react';

import SideBar from "./components/sidebar/sidebar.component";
import Content from "./components/content/content.component";

function App() {
    const [todoList, setTodoList] = useState('Today')
    return (
        <div className="App">
        <SideBar/>
        <Content todoList={todoList}/>
        </div>
    );
}

export default App;
