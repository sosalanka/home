// Save as: main.js
const products = [
    {
        name: "පෙති සුදු කිරීමේ ක්‍රීම්",
        description: "සතියකින් සුදු පැහැති චර්මයක්",
        price: "රු. 2500",
        features: ["ස්වභාවික", "ආයුර්වේද", "සුවඳ"]
    },
    {
        name: "රාත්‍රී ක්‍රීම්",
        description: "රාත්‍රියේ චර්මය පෝෂණය කිරීම",
        price: "රු. 3000",
        features: ["පෝෂණය", "ප්‍රතිඔක්සිකාරක", "යෞවනය"]
    },
    {
        name: "දිවා ක්‍රීම්",
        description: "දිවා කාලයේ චර්මය ආරක්ෂා කිරීම",
        price: "රු. 2800",
        features: ["SPF30", "තෙත", "ආරක්ෂණය"]
    }
];

function createProductCards() {
    const productContainer = document.querySelector('#products .grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:shadow-2xl';
        
        card.innerHTML = `
            <div class="h-48 bg-pink-100 rounded-lg mb-4 flex items-center justify-center">
                <svg class="w-24 h-24 text-pink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">${product.name}</h3>
            <p class="text-gray-600 mb-4">${product.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${product.features.map(feature => 
                    `<span class="bg-pink-100 text-pink-800 text-sm px-3 py-1 rounded-full">${feature}</span>`
                ).join('')}
            </div>
            <p class="text-2xl font-bold text-pink-600">${product.price}</p>
            <button class="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition">
                මිලදී ගන්න
            </button>
        `;
        
        productContainer.appendChild(card);
    });
}

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    createProductCards();
    
    // Initialize scroll animations
    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
