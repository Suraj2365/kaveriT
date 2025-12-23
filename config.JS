export const config = {
    storeName: "KAVERI",
    
    // --- DESIGN SETTINGS ---
    // Change these hex codes to any color you want!
    colors: {
        primary: "#D60000",       // The main accent color (Red)
        background: "#0a0a0a",    // The dark background
        text: "#ffffff",          // Text color
        cardGlass: "rgba(255, 255, 255, 0.03)" // Glass effect opacity
    },

    // Change the background image of the Hero section here
    // You can use a URL from the internet or a local file path
    heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",

    // --- GOOGLE FORM SETTINGS (The Free Backend) ---
    // Replace these with YOUR IDs from Step 1
    googleForm: {
        actionURL: "https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID_HERE/formResponse", // NOTE: Change 'viewform' to 'formResponse' in the URL!
        inputs: {
            name: "entry.123456789",    // Replace with your actual entry ID for Name
            phone: "entry.987654321",   // Replace with your actual entry ID for Phone
            email: "entry.555555555",   // Replace with your actual entry ID for Email
            order: "entry.111111111"    // Replace with your actual entry ID for Order Details
        }
    }
};