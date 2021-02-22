
import React, { Component } from 'react';
import logoo from '../../Assets/burger-logo.png';
import classes from '../Logo/Logo.module.css';
import rEA from '../../Assets/logo192.png';


const logo = (props) => (

    <div className={classes.Logo}>
        <img src={logoo}  alt='Burgers R us'/>
    </div>

)

export default logo;