// Save as: animations.js
let scene, camera, renderer, particles;

class ParticleSystem {
    constructor() {
        this.init();
        this.createParticles();
        this.animate();
    }

    init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('heroCanvas'),
            alpha: true,
            antialias: true
        });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        camera.position.z = 30;
    }

    createParticles() {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        
        for (let i = 0; i < 5000; i++) {
            vertices.push(
                Math.random() * 40 - 20,
                Math.random() * 40 - 20,
                Math.random() * 40 - 20
            );
            
            colors.push(
                0.816, // R (gold)
                0.686, // G (gold)
                0.216  // B (gold)
            );
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });
        
        particles = new THREE.Points(geometry, material);
        scene.add(particles);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        
        particles.rotation.x += 0.0005;
        particles.rotation.y += 0.0005;
        
        renderer.render(scene, camera);
    }

    onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
}

// Initialize particle system
document.addEventListener('DOMContentLoaded', () => {
    const particleSystem = new ParticleSystem();
    
    window.addEventListener('resize', () => particleSystem.onWindowResize());
});

// Scroll animations
// Save as: animations.js
// ... (previous code remains the same until the observer)

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Apply observations to elements
document.addEventListener('DOMContentLoaded', () => {
    // Get all elements with fade-up class
    const fadeElements = document.querySelectorAll('.fade-up');
    
    // Observe each element
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    // Additional elements to observe
    const animatedElements = document.querySelectorAll('.product-card, .ingredient-card, .section-title');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

// Cleanup function for the observer
function cleanupObserver() {
    observer.disconnect();
}

// Add cleanup on page unload if needed
window.addEventListener('unload', cleanupObserver);
