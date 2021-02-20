import React, { Component } from 'react';
import Aux  from '../../../containers/hoc/Auxx';
import Button from '../../Layout/UI/Button/Button';
const orderSummary = (props) => {
const ingredientSummary = Object.keys(props.ingredients)
   .map(igkey =>{
       return(
           <li key={igkey}>
               <span style={{textTransform:'capitalize'}}>{igkey}</span>:{props.ingredients[igkey]}
            </li>
       )
   });
   return(
       <Aux>
           <h3>Your Order</h3>
           <p>delicious burger with the following ingredients:</p>
           <ul>
               {ingredientSummary}
           </ul>
           <p>Continue to Checkout?</p>
        <Button clicked={props.confirmPurchase}  btnType='Success' >Continue</Button>
        <Button clicked={props.cancelPurchase}   btnType='Danger'>Cancel</Button>
       </Aux>)



}

export default orderSummary



