import React, { Component } from 'react';
import Aux  from '../../../containers/hoc/Auxx';

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
       </Aux>)



}

export default orderSummary



