import { cart, addToCartState, removeFromCartState, clearCartState } from '../data.js';
import { config } from '../config.js';

export function renderCartDrawer() {
    const container = document.getElementById('cart-container');
    container.innerHTML = `
        <div id="cart-overlay" class="cart-overlay fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-300" onclick="toggleCart()"></div>
        <div id="cart-drawer" class="cart-drawer fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#111] border-l border-white/10 z-[70] flex flex-col shadow-2xl">
            <div class="p-6 border-b border-white/10 flex justify-between items-center bg-[#161616]">
                <h2 class="text-2xl font-bold text-white">Your Cart</h2>
                <button onclick="toggleCart()" class="text-gray-400 hover:text-white"><i class="fas fa-times text-xl"></i></button>
            </div>
            <div id="cart-items" class="flex-1 overflow-y-auto p-6 space-y-4"></div>
            <div class="p-6 bg-[#161616] border-t border-white/10">
                <div class="flex justify-between items-end mb-6">
                    <span class="text-gray-400 text-sm uppercase tracking-wider">Total</span>
                    <span id="cart-total" class="text-3xl font-bold text-white">$0</span>
                </div>
                <form id="google-form" action="${config.googleForm.actionURL}" method="POST" target="hidden_iframe" onsubmit="sendOrder(event)">
                    <input type="text" name="${config.googleForm.inputs.name}" required placeholder="Full Name" class="w-full bg-black border-b border-white/20 p-3 mb-4 text-white focus:border-[var(--primary)] outline-none">
                    <input type="tel" name="${config.googleForm.inputs.phone}" required placeholder="Phone Number" class="w-full bg-black border-b border-white/20 p-3 mb-4 text-white focus:border-[var(--primary)] outline-none">
                    <input type="email" name="${config.googleForm.inputs.email}" required placeholder="Email Address" class="w-full bg-black border-b border-white/20 p-3 mb-6 text-white focus:border-[var(--primary)] outline-none">
                    <textarea id="hidden-order-input" name="${config.googleForm.inputs.order}" class="hidden"></textarea>
                    <button type="submit" id="submit-btn" class="w-full bg-[var(--primary)] text-white py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                        Confirm Order
                    </button>
                </form>
            </div>
        </div>
    `;
    updateCartUI();
}

export function updateCartUI() {
    const itemsContainer = document.getElementById('cart-items');
    const badge = document.getElementById('cart-count');
    badge.innerText = cart.length;
    badge.classList.toggle('hidden', cart.length === 0);

    if (cart.length === 0) {
        itemsContainer.innerHTML = '<div class="text-center text-gray-500 mt-20">Cart is empty.</div>';
    } else {
        itemsContainer.innerHTML = cart.map((item, index) => `
            <div class="flex gap-4 items-center bg-white/5 p-3 rounded-lg border border-white/5">
                <img src="${item.image}" class="w-16 h-16 object-cover rounded bg-gray-800">
                <div class="flex-1">
                    <div class="text-sm font-bold text-white">${item.name}</div>
                    <div class="text-[var(--primary)] text-sm">$${item.price}</div>
                </div>
                <button onclick="removeFromCart(${index})" class="text-gray-500 hover:text-red-500"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').innerText = '$' + total;
}

export function addToCart(id) {
    addToCartState(id);
    updateCartUI();
}
export function removeFromCart(index) {
    removeFromCartState(index);
    updateCartUI();
}
export function toggleCart() {
    document.body.classList.toggle('cart-open');
}
export function sendOrder(e) {
    const total = document.getElementById('cart-total').innerText;
    let invoice = "--- NEW ORDER ---\n";
    cart.forEach(item => { invoice += `• ${item.name} - $${item.price}\n`; });
    invoice += `\nTOTAL: ${total}`;
    
    document.getElementById('hidden-order-input').value = invoice;
    
    const btn = document.getElementById('submit-btn');
    btn.innerText = 'Processing...';
    
    setTimeout(() => {
        alert("Order Sent!");
        clearCartState();
        updateCartUI();
        toggleCart();
        btn.innerText = 'Confirm Order';
        document.getElementById('google-form').reset();
    }, 1500);
}