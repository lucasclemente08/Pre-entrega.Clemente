import React from 'react'
import { useCartContext } from '../../context/CartContext'
import './itemCart.css'

const ItemCart = ({product}) => {
  const {removeProduct}=  useCartContext()


  return (
    <div className="itemCart">
    <img src={product.image} alt={product.title}/>
    <div>
        <p>Titulo: {product.title}</p>
        <p>Cantidad: {product.quantity}</p>
        <p>Precio: {product.price}</p>
        <p>SubTotal: ${product.quantity * product.price}</p>
        <button onClick={(()=>removeProduct())}>Eliminar</button>
    </div>
    </div>
  )
}

export default ItemCart