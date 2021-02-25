
import React, { Component } from 'react';
import Classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './Toolbar.module.css';
const toolbar = (props) => (

    <header className={Classes.Toolbar}>
        <div>MENU</div>
        <div className={classes.Logo}>
        <Logo/>
        </div>
       
        <nav>
            <NavigationItems/>       
       </nav>

    </header>

)

export default toolbar;