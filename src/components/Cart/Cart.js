import React from 'react'
import './Cart.css'

const Cart = (props) => {
    const {cart,clearCart,children} = props;
    let total = 0;
    let shipping = 0;
    let quantity =0;
    for( const product of cart){
        quantity = quantity + product.quantity;
        total= total + product.price*product.quantity;
        shipping = shipping + product.shipping*product.quantity;
    }
const tax = total * 0.1;
const grandTotal = total + shipping + tax ;
  return (
    <div className='cart'>
      <h3> Order Summery</h3>
      <p> Selected Items : {quantity}</p>
      <p>Total price : ${total} </p>
      <p>Total shipping :${shipping} </p>
      <p>Tax :${tax.toFixed(2)}  </p>
      <h4> Grand Total :$ {grandTotal}</h4>
      <button onClick={clearCart}>Cleat Cart</button>
      {children}
      
    </div>
  )
}

export default Cart
