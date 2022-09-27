import React, { Component } from 'react';
import {menuItems} from './MenuItem';
import './NavBar.css'
import CartWidget from './cartWidget'


class NavBar extends Component {
  render(){
    return(
      <nav className="NavbarItems">
          
          <div className="menu-icon">
          <img  alt="images"src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-vegan-vegan-and-vegetarian-flaticons-flat-flat-icons-8.png"/>
          <div> <h1 className="navbar-logo">VegFast</h1></div>
       </div>
    
      
     
            <ul className="navbar-menu">
            <div>
          <li> <a className='nav-links cartW'> <CartWidget/></a></li>
          </div>
              {menuItems.map((item,index)=>{
                return(
                    <li key={index}>
                      <a href={item.url}className={item.cName}>
                        {item.title}  
                        
                      </a>
                    </li>
                )
              })}
             

            </ul>
           
      </nav>
    )
  }
}
export default NavBar