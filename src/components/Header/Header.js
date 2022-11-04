import React, { useContext } from "react";
import './Header.css'
import logo from '../../images/Logo.svg';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Header = () => {
   const {user,logOut} = useContext(AuthContext)
    return (
      <nav className="Header-nav">
         <img src={logo} alt=""  />

         <div>
            <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/about">About</Link>
           {
            user?.uid ?
            <button className="logout-btn" onClick={logOut}> Logout</button>
            :
           <>
                  <Link to="/signup">Signup</Link>
                  <Link to="/login">Login</Link>
           </>}
            
         </div>
      </nav>
    );
  }
  
  export default Header;
  