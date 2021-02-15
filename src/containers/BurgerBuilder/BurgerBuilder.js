import React, { Component } from 'react';
import Aux from '../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/Layout/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
class BurgerBuilder extends Component {

  state ={
    Ingredients:{
      salad:0,
      bacon:0,
      cheese:0,
      meat:0

    },

    price:{
      salad:0.5,
      bacon:1.5,
      cheese:1,
      meat:2

    },

    bill:0,

    purchaseable : false
     
    

  }  

  updatePurchaseable (sum) {

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
     
       this.setState({purchaseable:sum>0})
     


   
   
  }

  addIngredient = (type) => {
   var oldCount = this.state.Ingredients[type]
   oldCount++
   var newIngredients = {...this.state.Ingredients}
   newIngredients[type] = oldCount
   this.setState({  Ingredients: newIngredients})

   var newBill = this.state.price[type] + this.state.bill
   this.setState({
      bill : newBill
    })
    
    

    this.updatePurchaseable(Object.values(newIngredients).reduce((a,c)=>a+c))
    
  }

  removeIngredient = (type) => {



  var oldCount = this.state.Ingredients[type]
  if(oldCount==0){
    return
  }
  oldCount= oldCount-1
  var newIngredients = {...this.state.Ingredients}
  newIngredients[type] = oldCount
  this.setState({  Ingredients: newIngredients})

  var newBill = this.state.bill - this.state.price[type]
  this.setState({
     bill : newBill
   })
   
   
   this.updatePurchaseable(Object.values(newIngredients).reduce((a,c)=>a+c))
   
   
   
   }

render() {

  const disableIngredients = {...this.state.Ingredients}

  for (var key in disableIngredients) {
   
      disableIngredients[key] = disableIngredients[key] <= 0
    }

  
  
return (
    <Aux>
      <Modal>
        <OrderSummary ingredients={this.state.Ingredients}/>
      </Modal>
        <Burger isAnyIngredient={this.isAnyIngredient} type={this.state.Ingredients} />
        <BuildControls
         addIngredient={this.addIngredient}
         removeIngredient={this.removeIngredient}
         disableIngredients={disableIngredients}
         price={this.state.bill}
         purchase={this.state.purchaseable}
        />
    </Aux>

      );

    }
}

export default BurgerBuilder;