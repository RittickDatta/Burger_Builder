import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
class orderSummary extends Component {

  //COULD BE A FUNCTIONAL COMPONENT

  render(){
    const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
      return (
        <li key={igKey}>
          <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:
          {this.props.ingredients[igKey]}
        </li>
      );
    });

    return (
      <Auxiliary>
      <h3>Your Order</h3>
      <p>A Delicious Burger with the Following Ingredients</p>
      <ul>{ingredientSummary}</ul>
  <p><strong>Total Price:</strong>{this.props.price}</p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
    </Auxiliary>
    );
  }
}
export default orderSummary;
