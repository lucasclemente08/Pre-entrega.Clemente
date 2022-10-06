import React, { Component } from 'react';
import ItemCount from '../ItemCount';
import './ItemDetail.css'


export const ItemDetail=({data})=>{
    const onAdd=(quantity)=>{
        console.log(`compraste ${quantity} unidades`)
      }

    return(
     <div className="container">
        <div className="detail film">
            <img className="detail__image " src={data.images} alt="image" />
            <div className="content">
                <h1>{data.title}</h1>
                <ItemCount initial={1} stock={5} onAdd={onAdd}  />
            </div>
        </div>
     </div>
    )
}
export default ItemDetail