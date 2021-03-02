import React, { Component } from "react";
import classes from "../Modal/Modal.module.css";

class Modal extends Component {
  componentDidUpdate() {
    console.log("modal did update");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.onPurchase == nextProps.onPurchase) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <div hidden={!this.props.onPurchase} className={classes.Modal}>
        {this.props.children}
      </div>
    );
  }
}
export default Modal;
