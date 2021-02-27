import React, { Component } from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
const toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <div>MENU</div>
    <div onClick={props.click} className={classes.Logo}>
      <Logo onc />
    </div>

    <nav className={Classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
