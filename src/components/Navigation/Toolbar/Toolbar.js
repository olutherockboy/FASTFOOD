import React, { Component } from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (

    <header className={Classes.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            .....
        </nav>

    </header>

)

export default toolbar;