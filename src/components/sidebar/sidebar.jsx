import React from 'react';

import { connect } from 'react-redux';
import './sidebar.styles.css';

const SideBar = ({selectTodoList}) => (
    // Get users button config

    <div className="side-bar">
        <button className="side-bar-option" onClick={() => console.log('Today')}>Today</button>
        <button className="side-bar-option" onClick={() => console.log('Upcoming')}>Upcoming</button>
        <button className="side-bar-option" onClick={() => console.log('Anytime')}>Anytime</button>
    </div>
)

export default SideBar;