// Three.js scene setup
let scene, camera, renderer;
const products = [
    { name: 'වැනිලා ක්‍රීම්', price: 'රු.350', description: 'සාම්ප්‍රදායික වැනිලා රසය' },
    { name: 'චොකලට් ක්‍රීම්', price: 'රු.400', description: 'මිහිරි චොකලට් රසය' },
    { name: 'ස්ට්‍රෝබෙරි ක්‍රීම්', price: 'රු.380', description: 'නැවුම් ස්ට්‍රෝබෙරි රසය' },
    // Add more products as needed
];

function init() {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#hero-canvas'),
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Create floating cream bowl model
    const geometry = new THREE.TorusGeometry(3, 1, 16, 100);
    const material = new THREE.MeshPhongMaterial({
        color: 0xea580c,
        transparent: true,
        opacity: 0.8,
        shininess: 100
    });
    const cream = new THREE.Mesh(geometry, material);
    scene.add(cream);

    camera.position.z = 10;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        cream.rotation.x += 0.01;
        cream.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();

    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight * 0.85) {
            el.classList.add('active');
        }
    });
}

// Product cards generation
function generateProductCards() {
    const productContainer = document.querySelector('#products .grid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card bg-white rounded-lg shadow-lg p-6 text-center';
        card.innerHTML = `
            <h3 class="text-xl font-bold mb-4">${product.name}</h3>
            <p class="text-gray-600 mb-4">${product.description}</p>
            <p class="text-2xl font-bold text-orange-600 mb-6">${product.price}</p>
            <button class="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-colors">
                මිලදී ගන්න
            </button>
        `;
        productContainer.appendChild(card);
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    init();
    generateProductCards();
    window.addEventListener('scroll', handleScrollAnimations);
    handleScrollAnimations(); // Initial check
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
