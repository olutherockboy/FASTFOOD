import React, { Component } from "react";
import Classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Toolbar.module.css";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <DrawerToggle click={props.click} />
    <div onClick={props.click} className={classes.Logo}>
      <Logo />
    </div>

    <nav className={Classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
