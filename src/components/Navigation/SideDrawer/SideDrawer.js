import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import classes from "../SideDrawer/SideDrawer.module.css";
import BackDrop from "../../Layout/UI/Backdrop/Backdrop";
import Aux from "../../../containers/hoc/Auxx";
import Klasses from "../SideDrawer/SideDrawer.module.css";

const sideDrawer = (props) => {
  var sideDrawerClass = [Klasses.SideDrawer, Klasses.Close];
  if (props.show) {
    var sideDrawerClass = [Klasses.SideDrawer, Klasses.Open];
  }

  return (
    <Aux>
      <BackDrop show={props.show} click={props.toggle} />
      <div className={sideDrawerClass.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
