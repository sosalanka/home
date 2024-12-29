// main.js - Save in /js folder
const products = [
    {
        name: "සුදු වීමේ ක්‍රීම්",
        description: "ස්වභාවික ආයුර්වේද සූත්‍ර සමඟ",
        price: "Rs. 1,500"
    },
    {
        name: "මුහුණේ ආලේපන",
        description: "සම පැහැපත් කිරීමට",
        price: "Rs. 2,000"
    },
    {
        name: "රාත්‍රී ක්‍රීම්",
        description: "රාත්‍රී ප්‍රතිකාර සඳහා",
        price: "Rs. 1,800"
    }
];

// Three.js Background Animation
const initThreeBackground = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#three-container'),
        alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#ff69b4'
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 3;

    // Animation
    const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Initialize parallax effect
const initParallax = () => {
    const sections = document.querySelectorAll('.parallax-section');
    
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const distance = window.pageYOffset;
            section.style.transform = `translateY(${distance * 0.1}px)`;
        });
    });
};

// Generate product cards
const generateProducts = () => {
    const productsContainer = document.querySelector('#products .grid');
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card p-6 rounded-xl shadow-lg';
        
        card.innerHTML = `
            <div class="h-48 mb-4">
                <svg class="w-full h-full" viewBox="0 0 200 200">
                    <circle cx="100" cy="100" r="80" fill="#ffd1dc" />
                    <circle cx="100" cy="100" r="60" fill="#ff69b4" opacity="0.5" />
                </svg>
            </div>
            <h3 class="text-xl font-bold mb-2 sinhala-text">${product.name}</h3>
            <p class="text-gray-600 mb-4 sinhala-text">${product.description}</p>
            <p class="text-pink-600 font-bold">${product.price}</p>
        `;
        
        productsContainer.appendChild(card);
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThreeBackground();
    initParallax();
    generateProducts();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
