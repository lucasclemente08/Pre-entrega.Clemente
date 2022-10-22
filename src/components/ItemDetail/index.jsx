import React, { Component,useState } from 'react';
import ItemCount from '../ItemCount';
import './ItemDetail.css'
import {Link} from 'react-router-dom'
import {useCartContext} from '../../context/CartContext'


export const ItemDetail=({data})=>{

const[ goToCart,setGoToCart]=useState(false)
const {addProduct}=useCartContext()



    const onAdd=(quantity)=>{
         setGoToCart(true);
        addProduct(data,quantity)
    }

    return(
     <div className="container">
        <div className="detail film">
            <img className="detail__image " src={data.image} alt="images" />
            <div className="content">
                <h1>{data.title}</h1>
                {
                    goToCart
                    ? <Link to='/cart'>Terminar Compra</Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}  />
                }
               
            </div>
        </div>
     </div>
    )
}
export default ItemDetail