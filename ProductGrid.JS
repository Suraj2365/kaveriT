import { products } from '../data.js';

export function renderProducts() {
    const container = document.getElementById('product-container');
    let html = `
    <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold mb-8 text-white">Collection</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    `;

    products.forEach(p => {
        html += `
            <div class="glass-card rounded-2xl overflow-hidden relative group">
                <div class="h-64 w-full bg-gray-800 relative overflow-hidden">
                    <img src="${p.image}" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                </div>
                <div class="p-6">
                    <div class="text-xs text-gray-400 mb-1 uppercase tracking-wider">${p.category}</div>
                    <h3 class="text-xl font-bold mb-2 text-white">${p.name}</h3>
                    <div class="flex items-center gap-3 mb-4">
                        <span class="text-2xl font-bold text-[var(--primary)]">$${p.price}</span>
                    </div>
                    <button onclick="addToCart(${p.id})" class="w-full py-3 border border-white/20 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all text-white font-bold">
                        Add to Order
                    </button>
                </div>
            </div>
        `;
    });
    html += `</div></div>`;
    container.innerHTML = html;
}