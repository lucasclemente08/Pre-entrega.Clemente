import React, { useContext } from 'react';
import './item.css';
import { Link } from 'react-router-dom';
import{useCartContext} from '../../context/CartContext'

const Item=({info})=>{
    const nombre=useContext(useCartContext)
    console.log('ITEM:',nombre)
    return(
        <Link  to={`/detalle/${info.id}`} href='' className="film">
            <img src={info.image} alt="images" />
            <p>{info.title}</p>

        </Link>
    )
}
export default Item;