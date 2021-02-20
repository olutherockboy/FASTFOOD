
import React, { Component } from 'react';
import Logo from '../../Assets/burger-logo.png';
import classes from '../Logo/Logo.module.css';


const logo = (props) => (

    <div className={classes.Logo}>
        <image src={Logo}  alt='Burgers R us'/>
    </div>

)

export default logo;