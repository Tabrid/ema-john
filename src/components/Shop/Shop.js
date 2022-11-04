import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";

import './Shop.css'



const Shop = () => {
    const products = useLoaderData();
    const[cart,setCart] = useState([]);
    
 const clearCart = () => {

  setCart([]);
  deleteShoppingCart();

 }
    useEffect(() =>{

      const storeCart = getStoreCart();
      const saveedCart = [];
      for( const id in storeCart){
        const addedProduct = products.find(product=> product.id === id);

        if(addedProduct){
          const quantity = storeCart[id];
          addedProduct.quantity = quantity;

          saveedCart.push(addedProduct);
        }
        

      }
      setCart(saveedCart);

    },[products])

    const handleAddToCart = (selectedProduct) => {
      let newCart =[];

       const exists = cart.find(product => product.id === selectedProduct.id);
       if(!exists){
        selectedProduct.quantity =1;
        newCart =[...cart,selectedProduct];
       }
       else{
        const rest =cart.filter(product => product.id !== selectedProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest,exists];

       }
       
        setCart(newCart);
        addToDb(selectedProduct.id);
    };
    return (
      <div className="Shop">
       <div className="products-container"> 
      {

      products.map(product => 
      <Product key={product.id}
      product={product}
      handleAddToCart ={handleAddToCart}
      
      ></Product>)
      

      }
       </div>
       <div className="cart-container">
        <Cart clearCart ={ clearCart} cart={cart}>  
        <Link  to="/orders"> 
        <button> Review orders</button>
        </Link>
          
      </Cart>
      </div>

      </div>
    );
  }
  
  export default Shop;
  