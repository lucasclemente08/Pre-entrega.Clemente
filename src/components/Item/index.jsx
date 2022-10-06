import React, { Component } from 'react';
import './item.css';
import { Link } from 'react-router-dom';

const Item=({info})=>{
    return(
        <Link  to={`/detalle/${info.id}`} href='' className="film">
            <img src={info.images} alt="images" />
            <p>{info.title}</p>

        </Link>
    )
}
export default Item;