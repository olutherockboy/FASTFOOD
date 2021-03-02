import React, { Component } from "react";
import Aux from "../../../containers/hoc/Auxx";
import Button from "../../Layout/UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("ordersummary did update");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igkey) => {
        return (
          <li key={igkey}>
            <span style={{ textTransform: "capitalize" }}>{igkey}</span>:
            {this.props.ingredients[igkey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.confirmPurchase} btnType="Success">
          Continue
        </Button>
        <Button clicked={this.props.cancelPurchase} btnType="Danger">
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
