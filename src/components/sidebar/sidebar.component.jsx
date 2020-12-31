import React from 'react';

import { connect } from 'react-redux';
import { selectTodoList } from '../../redux/actions/todoList';
import './sidebar.styles.css';

const SideBar = ({selectTodoList}) => (
    // Get users button config

    <div className="side-bar">
        <button onClick={() => selectTodoList("Today")}>Today</button>
        <button onClick={() => selectTodoList("Upcoming")}>Upcoming</button>
        <button onClick={() => selectTodoList("Anytime")}>Anytime</button>
    </div>
)

const mapDispatchToProps = dispatch => ({
    selectTodoList: todoListName => dispatch(selectTodoList(todoListName))
})

export default connect(null, mapDispatchToProps)(SideBar);
