import React,{useContext} from "react";
import {useCartContext} from '../../context/CartContext'


function cartWidget(){

const {totalProducts}=useCartContext()
        return (
         <>
         <i className="bi cartW bi-cart-fill"></i>
         <span >{totalProducts()|| ''}</span>

         </>

             

    )}
export default cartWidget;