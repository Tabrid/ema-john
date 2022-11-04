import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

const Order = () => {
  const {previousCart} = useLoaderData();
  const [cart, setCart] = useState(previousCart);

  const handleRemoveItem = (id) => {

    const remaining = cart.filter(product => product.id!== id);
    setCart(remaining);
    removeFromDb(id);

  }
  const clearCart = () => {

    setCart([]);
    deleteShoppingCart();
  
   }

  return (
    <div className="Shop">
      
       <div className="orders-container">
        {

          cart.map(product => <ReviewItems
          key={product.id}
          product={product}
          handleRemoveItem={handleRemoveItem}
          ></ReviewItems>)
        }
        {

          cart.length === 0 && <h2> No Items for Review.Please <Link to="/">Shop more</Link></h2>
        }

       </div>
       <div className="cart-container">

       <Cart clearCart = {clearCart} cart={cart}>
        
        <Link to='/shipping'> 
        <button> Proceed shipping</button>
        </Link>
        
         </Cart>
      
       </div>


    </div>
  )
}

export default Order
