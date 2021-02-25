import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems'
import classes from "../SideDrawer/SideDrawer.module.css";

const sideDrawer = () =>{
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav>
                <NavigationItems/>
            </nav>


        </div>
    );
};

export default sideDrawer;