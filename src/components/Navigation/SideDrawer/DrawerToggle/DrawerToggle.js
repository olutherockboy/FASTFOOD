import React, { Component } from "react";
import Classes from "../DrawerToggle/DrawerToggle.module.css";

const drawerToggle = (props) => (
  <div onClick={props.click} className={Classes.DrawerToggle}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
