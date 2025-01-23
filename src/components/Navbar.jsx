import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
          About
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
          Contact
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Products
        </NavLink>
        {user && (
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'active' : ''}>
            Dashboard
          </NavLink>
        )}
      </div>
      <div className="auth-buttons">
        <NavLink to="/cart" className="cart-link">
          Cart ({cartItemCount})
        </NavLink>
        {user ? (
          <button onClick={logout} className="logout-button">Logout</button>
        ) : (
          <>
            <NavLink to="/login" className="auth-button">Login</NavLink>
            <NavLink to="/register" className="auth-button">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;