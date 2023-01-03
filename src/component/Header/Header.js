import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

export default function Header() {
  return (
    <nav className='header'>
        <img src={logo} alt='logo' />
        <div>
            <Link to="/shop">Shop</Link>
            <Link to="/order">Order Review</Link>
            <Link to="/inventory">Inventory Management</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
  )
}
