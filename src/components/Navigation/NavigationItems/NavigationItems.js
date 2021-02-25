import React from 'react'
import  classes from '../../Navigation/NavigationItems/NavigationItems.module.css'
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem'


const navigationItems = () =>(
    <ul className={classes.NavigationItems} >
        <NavigationItem link='/'>Burger builder</NavigationItem>
        <NavigationItem link='/'>Checkout</NavigationItem>
        
    </ul>
);

export default navigationItems;