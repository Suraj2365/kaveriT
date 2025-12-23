import { config } from '../config.js';
import { cart } from '../data.js';

export function renderNavbar() {
    return `
    <nav class="fixed w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent">
        <div class="text-3xl font-bold tracking-tighter flex items-center gap-2 text-white">
            <span class="text-[var(--primary)] text-4xl">●</span> ${config.storeName}
        </div>
        <div class="flex gap-4 items-center">
            <button onclick="toggleCart()" class="relative w-12 h-12 bg-[var(--primary)] rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_15px_var(--primary)] cursor-pointer z-50 text-white">
                <i class="fas fa-shopping-bag"></i>
                <span id="cart-count" class="absolute -top-1 -right-1 bg-white text-[var(--primary)] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center hidden">0</span>
            </button>
        </div>
    </nav>
    `;
}