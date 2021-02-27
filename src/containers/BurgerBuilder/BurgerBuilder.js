import React, { Component } from "react";
import Aux from "../hoc/Auxx";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/Layout/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/Layout/UI/Backdrop/Backdrop";

class BurgerBuilder extends Component {
  state = {
    Ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },

    price: {
      salad: 0.5,
      bacon: 1.5,
      cheese: 1,
      meat: 2,
    },

    bill: 0,

    purchaseable: false,
    purchasing: false,
  };

  confirmPurchase = () => {
    alert("thanks for your purchase");
  };

  cancelPurchase = () => {
    this.setState({ purchasing: false });
  };

  onPurchase = () => {
    this.setState({ purchasing: true });
  };

  updatePurchaseable(sum) {
    //     const Ingredients = {
    //       ...this.state.Ingredients
    //     }
    // const sum = Object.keys(Ingredients)
    //       .map(igKey =>{
    //         return Ingredients[igKey];
    //       })
    //       .reduce((sum,el)=>{
    //         return sum+el;
    //       },0)
    //       this.setState({purchaseable:sum>0});

    this.setState({ purchaseable: sum > 0 });

    //   let purchase= this.state.purchaseable

    //  let ingredients = Object.values(this.state.Ingredients).reduce((accumulator, currentValue) => accumulator + currentValue)
    //  let isTrue = ingredients>0
    //  if (isTrue ) {

    //        this.setState({purchaseable:!purchase})
  }

  addIngredient = (type) => {
    var oldCount = this.state.Ingredients[type];
    oldCount++;
    var newIngredients = { ...this.state.Ingredients };
    newIngredients[type] = oldCount;
    this.setState({ Ingredients: newIngredients });

    var newBill = this.state.price[type] + this.state.bill;
    this.setState({
      bill: newBill,
    });

    this.updatePurchaseable(
      Object.values(newIngredients).reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    );
  };

  removeIngredient = (type) => {
    var oldCount = this.state.Ingredients[type];
    if (oldCount == 0) {
      return;
    }
    oldCount = oldCount - 1;
    var newIngredients = { ...this.state.Ingredients };
    newIngredients[type] = oldCount;
    this.setState({ Ingredients: newIngredients });

    var newBill = this.state.bill - this.state.price[type];
    this.setState({
      bill: newBill,
    });

    this.updatePurchaseable(
      Object.values(newIngredients).reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    );
  };

  render() {
    const disableIngredients = { ...this.state.Ingredients };

    for (var key in disableIngredients) {
      disableIngredients[key] = disableIngredients[key] <= 0;
    }

    const backdrop = this.state.purchasing ? (
      <Backdrop click={this.cancelPurchase} show={this.state.purchasing} />
    ) : null;

    return (
      <Aux>
        <Modal
          onPurchase={this.state.purchasing}
          cancelPurchase={this.cancelPurchase}
        >
          <OrderSummary
            cancelPurchase={this.cancelPurchase}
            confirmPurchase={this.confirmPurchase}
            ingredients={this.state.Ingredients}
            price={this.state.bill}
          />
        </Modal>
        {backdrop}
        <Burger
          isAnyIngredient={this.isAnyIngredient}
          type={this.state.Ingredients}
        />
        <BuildControls
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
          disableIngredients={disableIngredients}
          price={this.state.bill}
          purchase={this.state.purchase}
          purchase={this.state.purchaseable}
          onPurchase={this.onPurchase}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
