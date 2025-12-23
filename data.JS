export const products = [
    { id: 1, name: "Luxury Fridge", category: "Kitchen", price: 2499, image: "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80" },
    { id: 2, name: "Smart Fan", category: "Cooling", price: 399, image: "https://images.unsplash.com/photo-1618941716939-553dfdfc674d?w=800&q=80" },
    { id: 3, name: "Pro Washer", category: "Laundry", price: 1299, image: "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=800&q=80" }
];

export let cart = [];

export function addToCartState(id) {
    const product = products.find(p => p.id === id);
    if(product) cart.push(product);
}
export function removeFromCartState(index) {
    cart.splice(index, 1);
}
export function clearCartState() {
    cart.length = 0;
}