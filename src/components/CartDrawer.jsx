import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'


export default function CartDrawer() {
const { isDrawerOpen, closeDrawer, cartItems, updateQty, removeFromCart, getSubtotal, goToCheckout } = useCart()


return (
<div className={`drawer ${isDrawerOpen ? 'open' : ''}`} role="dialog" aria-hidden={!isDrawerOpen}>
<div className="drawer-backdrop" onClick={closeDrawer} />
<aside className="drawer-panel">
<header className="drawer-header">
<h2>Your Cart</h2>
<button onClick={closeDrawer} aria-label="Close">✕</button>
</header>


<div className="drawer-content">
{cartItems.length === 0 ? (
<div className="empty">Your cart is empty. <Link to="/">Shop now</Link></div>
) : (
<ul className="cart-list">
{cartItems.map(item => (
<li key={item.id} className="cart-item">
<img src={item.image} alt={item.name} />
<div className="item-info">
<strong>{item.name}</strong>
<span>${(item.price * item.qty).toFixed(2)}</span>
<div className="qty-controls">
<button onClick={() => updateQty(item.id, item.qty - 1)}>-</button>
<input value={item.qty} onChange={e => updateQty(item.id, Number(e.target.value || 1))} />
<button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
</div>
<button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
</div>
</li>
))}
</ul>
)}
</div>


<footer className="drawer-footer">
<div className="subtotal">Subtotal: <strong>${getSubtotal().toFixed(2)}</strong></div>
<div className="drawer-actions">
<Link to="/cart" onClick={closeDrawer} className="btn">View Cart</Link>
<button className="btn primary" onClick={goToCheckout} disabled={cartItems.length === 0}>Checkout</button>
</div>
</footer>
</aside>
</div>
)
}