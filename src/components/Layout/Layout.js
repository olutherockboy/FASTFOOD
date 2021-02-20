import React, { Component } from 'react';
import Aux from '../../containers/hoc/Auxx';
import classes from '../../components/Layout/Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) =>  (
    <Aux>
    <Toolbar></Toolbar>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>  
    </Aux>
    

)

export default layout;