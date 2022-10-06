import React, { Component } from 'react';

import './NavBar.css'
import CartWidget from './cartWidget'
import {NavLink} from 'react-router-dom';


class NavBar extends Component {
  render(){
    return(
      <nav className="NavbarItems">
          
          <div className="menu-icon">
          <img  alt="images" src="https://img.icons8.com/ios-glyphs/30/000000/movie-projector.png"/>
          <div> <h1 className="navbar-logo">Peliculas</h1></div>
       </div>
    
       <ul className="nav-list navbar-menu">
       <li ><NavLink  to='/'  className='nav__link'>Inicio</NavLink></li>
       <li ><NavLink  to='/categoria/films' className='nav__link'>Peliculas</NavLink></li>
       <li ><NavLink  to='/categoria/series' className='nav__link'>Series</NavLink></li>
     
       <div>
          <li> <NavLink to='cart' className='nav-links cartW'> <CartWidget/></NavLink></li>
          </div>
       
       </ul>
      
      </nav>
    )
  }
}
export default NavBar