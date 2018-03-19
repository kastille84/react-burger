import React, { Component } from 'react';
import Auxi from '../../../hoc/Auxi/Auxi';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // this could be a functional component, doesn't have to be a class
    componentWillUpdate() {
        console.log('[OrderSummary] will update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
                    .map(igKey => {
                        return (
                            <li key={igKey}>
                                <span style={{textTransform: 'capitalize'}}
                                >{igKey}</span> : this.{this.props.ingredients[igKey]}
                            </li>
                        );
                    }); 

        return  (
            <Auxi>
                <h3>Your Order</h3>
                <p>A Delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxi>
        );
    }
       
};

export default OrderSummary;