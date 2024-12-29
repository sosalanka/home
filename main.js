// Save as: main.js
// Products Data
const products = [
    {
        id: 1,
        name: "ප්‍රීමියම් පෙති සුදු කිරීමේ ක්‍රීම්",
        description: "විශේෂ ආයුර්වේද සූත්‍රයෙන් නිපදවන ලද මෙම ක්‍රීමය මගින් සතියක් ඇතුළත ඔබේ සමේ ස්වභාවික දීප්තිය ලබාදෙයි.",
        price: "රු. 4,500",
        ingredients: ["කහ", "සන්දල්", "කොහොඹ"],
        benefits: ["සම සුදුවීම", "තරුණ පෙනුම", "ස්වභාවික දීප්තිය"],
        size: "50ml"
    },
    {
        id: 2,
        name: "ඇන්ටි-ඒජිං නైට් ක්‍රීම්",
        description: "රාත්‍රී කාලයේදී ඔබේ සම පෝෂණය කරමින් වයස්ගත වීමේ ලකුණු අවම කරයි.",
        price: "රු. 5,200",
        ingredients: ["ආලෝ වෙරා", "විටමින් E", "කොලජන්"],
        benefits: ["රැලි අවම කිරීම", "සම තද කිරීම", "පෝෂණය"],
        size: "30ml"
    },
    {
        id: 3,
        name: "හයිඩ්රේටිං් ෆේස් සීරම්",
        description: "දිවා කාලයේ සම ආරක්ෂා කරමින් අවශ්‍ය තෙතමනය රැකදෙන සීරම්.",
        price: "රු. 3,900",
        ingredients: ["හයලුරොනික් ඇසිඩ්", "විටමින් C", "නීම්"],
        benefits: ["තෙතමනය", "ප්‍රතිඔක්සිකාරක", "ආරක්ෂාව"],
        size: "30ml"
    }
];

// Ingredients Data
const ingredients = [
    {
        name: "කහ",
        description: "ස්වභාවික ප්‍රතිජීවක ගුණ",
        icon: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 8v8M8 12h8"/>
        </svg>`
    },
    {
        name: "සන්දල්",
        description: "සම සුදු කිරීමේ ගුණ",
        icon: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>`
    },
    {
        name: "ආලෝ වෙරා",
        description: "සම පෝෂණය",
        icon: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <path d="M12 8v8M8 12h8"/>
        </svg>`
    },
    {
        name: "නීම්",
        description: "ස්වභාවික ආරක්ෂාව",
        icon: `<svg class="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>`
    }
];

// Initialize website
document.addEventListener('DOMContentLoaded', () => {
    // Remove loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('opacity-0');
        setTimeout(() => {
            document.getElementById('loader').remove();
        }, 500);
    }, 1500);

    // Initialize components
    initializeNavigation();
    createProductCards();
    createIngredientCards();
    initializeAnimations();
    initializeContactForm();
});

// Navigation handling
function initializeNavigation() {
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md');
        } else {
            nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md');
        }
    });
}

// Create product cards
function createProductCards() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card fade-up';
        
        card.innerHTML = `
            <div class="h-48 bg-gold/10 rounded-xl mb-6 flex items-center justify-center">
                <div class="text-gold">
                    <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                    </svg>
                </div>
            </div>
            <h3 class="text-xl font-medium mb-2">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-4">${product.description}</p>
            <div class="mb-4">
                <h4 class="text-sm font-medium mb-2">ප්‍රතිලාභ:</h4>
                <div class="flex flex-wrap gap-2">
                    ${product.benefits.map(benefit => 
                        `<span class="bg-gold/10 text-gold text-xs px-3 py-1 rounded-full">${benefit}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="flex items-center justify-between mt-6">
                <span class="text-xl font-medium text-gold">${product.price}</span>
                <button class="btn-secondary">මිලදී ගන්න</button>
            </div>
        `;
        
        productsGrid.appendChild(card);
    });
}

// Create ingredient cards
function createIngredientCards() {
    const ingredientsGrid = document.getElementById('ingredientsGrid');
    
    ingredients.forEach(ingredient => {
        const card = document.createElement('div');
        card.className = 'text-center fade-up';
        
        card.innerHTML = `
            <div class="bg-gold/10 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center text-gold">
                ${ingredient.icon}
            </div>
            <h3 class="font-medium mb-2">${ingredient.name}</h3>
            <p class="text-sm text-gray-600">${ingredient.description}</p>
        `;
        
        ingredientsGrid.appendChild(card);
    });
}

// Initialize animations
function initializeAnimations() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('.fade-up').forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
}

// Contact form handling
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.innerHTML = `
        <div class="space-y-4">
            <div>
                <label class="block text-gray-300 mb-2">නම</label>
                <input type="text" class="w-full bg-white/10 rounded-lg px-4 py-3 text-white" required>
            </div>
            <div>
                <label class="block text-gray-300 mb-2">විද්‍යුත් තැපෑල</label>
                <input type="email" class="w-full bg-white/10 rounded-lg px-4 py-3 text-white" required>
            </div>
            <div>
                <label class="block text-gray-300 mb-2">පණිවිඩය</label>
                <textarea class="w-full bg-white/10 rounded-lg px-4 py-3 text-white h-32" required></textarea>
            </div>
            <button type="submit" class="btn-primary-large w-full">
                යවන්න
            </button>
        </div>
    `;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic here
    });
}
