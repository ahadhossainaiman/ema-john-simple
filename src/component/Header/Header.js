import React from 'react'
import logo from '../../images/Logo.svg';
import './Header.css'

export default function Header() {
  return (
    <nav className='header'>
        <img src={logo} alt='logo' />
        <div>
            <a href="/order">Order</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Inventory Management</a>
            <a href="/login">Login</a>
        </div>
    </nav>
  )
}
