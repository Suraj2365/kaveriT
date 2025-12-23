import { config } from './config.js';
import { renderNavbar } from './components/Navbar.js';
import { initHero } from './components/Hero.js';
import { renderProducts } from './components/ProductGrid.js';
import { renderCartDrawer, addToCart, toggleCart, removeFromCart, sendOrder } from './components/CartDrawer.js';

document.addEventListener('DOMContentLoaded', () => {
    document.title = config.storeName;
    const root = document.documentElement;
    root.style.setProperty('--primary', config.colors.primary);
    root.style.setProperty('--bg', config.colors.background);
    root.style.setProperty('--text', config.colors.text);
    
    document.body.classList.remove('opacity-0');

    document.getElementById('nav-container').innerHTML = renderNavbar();
    initHero();
    renderProducts();
    renderCartDrawer();

    window.toggleCart = toggleCart;
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.sendOrder = sendOrder;
});