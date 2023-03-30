
import React from 'react';

const Cart = (props) => {
    console.log(props);
    return (
        <div>
          <h1>items added : {props.cart.length}</h1>
          {
            props.cart.map(item=> <h5> Product Name: {item.strMeal}</h5>)
          }
        </div>
    );
};

export default Cart;