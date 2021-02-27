import React, { Component } from "react";
import Aux from "../../containers/hoc/Auxx";
import classes from "../../components/Layout/Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  toggle = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    return (
      <Aux>
        <Toolbar click={this.toggle} />
        <SideDrawer show={this.state.showSideDrawer} toggle={this.toggle} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
