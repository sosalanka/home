<!DOCTYPE html>
<html lang="si">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>සෝස ලංකා | Cream Business</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link href="styles/main.css" rel="stylesheet">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;700&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Noto Sans Sinhala', sans-serif;
        }

        .canvas-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            z-index: -1;
        }

        .product-card {
            backdrop-filter: blur(10px);
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        }

        .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .cream-blob {
            animation: blobAnimation 8s infinite ease-in-out;
        }

        @keyframes blobAnimation {
            0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
            50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        #cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background-color: #e11d48;
            color: white;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
        }

        .loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .loading.hidden {
            display: none;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-rose-50 to-pink-100">
    <!-- Loading Screen -->
    <div class="loading">
        <div class="loading-spinner">
            <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600"></div>
        </div>
    </div>

    <!-- Three.js Container -->
    <div class="canvas-container" id="three-container"></div>

    <!-- Navigation -->
    <nav class="fixed w-full p-4 backdrop-blur-lg bg-white/30 z-50">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <svg class="w-10 h-10" viewBox="0 0 40 40">
                    <circle class="fill-pink-500" cx="20" cy="20" r="20"/>
                    <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-size="20">ස</text>
                </svg>
                <span class="text-2xl font-bold text-pink-800">සෝස ලංකා</span>
            </div>
            <div class="flex items-center space-x-6">
                <a href="#products" class="text-pink-900 hover:text-pink-600">නිෂ්පාදන</a>
                <a href="#categories" class="text-pink-900 hover:text-pink-600">වර්ග</a>
                <a href="#about" class="text-pink-900 hover:text-pink-600">අප ගැන</a>
                <a href="#contact" class="text-pink-900 hover:text-pink-600">සම්බන්ධ වන්න</a>
                <div class="relative cursor-pointer" onclick="toggleCart()">
                    <svg class="w-6 h-6 text-pink-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                    <span id="cart-count" class="hidden">0</span>
                </div>
            </div>
        </div>
    </nav>

    <!-- Cart Sidebar -->
    <div id="cart-sidebar" class="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50">
        <div class="p-4">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-bold text-pink-900">කාට්ටුව</h3>
                <button onclick="toggleCart()" class="text-gray-500 hover:text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div id="cart-items" class="space-y-4"></div>
            <div class="mt-4 border-t pt-4">
                <div class="flex justify-between mb-2">
                    <span>එකතුව:</span>
                    <span id="cart-total">රු. 0.00</span>
                </div>
                <button onclick="checkout()" class="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
                    ඇණවුම් කරන්න
                </button>
            </div>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div class="text-center relative z-10">
            <h1 class="text-6xl font-bold text-pink-900 mb-6 animate-fade-in">සෝස ලංකා</h1>
            <p class="text-2xl text-pink-700 mb-8 animate-fade-in delay-200">අපගේ සුවිශේෂී ක්‍රීම් නිෂ්පාදන</p>
            <a href="#products" class="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-all inline-block animate-fade-in delay-400">
                දැන් ඇණවුම් කරන්න
            </a>
        </div>
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-white/30"></div>
        </div>
    </section>

    <!-- Categories Section -->
    <section id="categories" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-pink-900 text-center mb-12">නිෂ්පාදන වර්ග</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="category-card bg-white/30 backdrop-blur-md rounded-xl p-6 text-center transform hover:-translate-y-2 transition-all">
                    <div class="w-20 h-20 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-pink-900 mb-2">සුවඳ ක්‍රීම්</h3>
                    <p class="text-pink-700">විශේෂ සුවඳ සහිත ක්‍රීම් නිෂ්පාදන</p>
                </div>
                <!-- Add more category cards here -->
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-pink-900 text-center mb-12">අපගේ නිෂ්පාදන</h2>
            <div id="products-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Products will be dynamically added here -->
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-4 bg-white/30 backdrop-blur-sm">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-pink-900 text-center mb-12">අප ගැන</h2>
            <div class="max-w-3xl mx-auto text-center">
                <p class="text-lg text-pink-800 mb-6">
                    සෝස ලංකා යනු ශ්‍රී ලංකාවේ ප්‍රමුඛතම ක්‍රීම් නිෂ්පාදන ආයතනයකි. අපි සෑම විටම ඉහළම 
                    තත්ත්වයේ නිෂ්පාදන ඔබ වෙත ලබා දීමට කැපවී සිටිමු.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-pink-900 mb-2">100%</h3>
                        <p class="text-pink-700">ස්වභාවික</p>
                    </div>
                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-pink-900 mb-2">1000+</h3>
                        <p class="text-pink-700">සතුටුදායක පාරිභෝගිකයින්</p>
                    </div>
                    <div class="text-center">
                        <h3 class="text-2xl font-bold text-pink-900 mb-2">10+</h3>
                        <p class="text-pink-700">නිෂ්පාදන වර්ග</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-4">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-pink-900 text-center mb-12">අප හා සම්බන්ධ වන්න</h2>
            <div class="max-w-lg mx-auto">
                <form id="contact-form" class="space-y-6">
                    <div>
                        <label class="block text-pink-900 mb-2">ඔබගේ නම</label>
                        <input type="text" class="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required>
                    </div>
                    <div>
                        <label class="block text-pink-900 mb-2">විද්‍යුත් තැපෑල</label>
                        <input type="email" class="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500" required>
                    </div>
                    <div>
                        <label class="block text-pink-900 mb-2">පණිවිඩය</label>
                        <textarea class="w-full p-3 rounded-lg border border-pink-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 h-32" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700">
                        යවන්න
                    </button>
                </form>
            </div>
        </div>
    </section>

    <!-- Footer -->
<footer class="bg-pink-900 text-white py-8">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-xl font-bold mb-4">සෝස ලංකා</h3>
                <p>අංක 125/16ඒ, එච්.කේ. එඩ්මන් මාවත,<br>මිලිදුව, ගාල්ල.</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">සම්බන්ධ වන්න</h3>
                <p>දුරකථන: 077-6284964<br>විද්‍යුත් තැපෑල: sosalanka@gmail.com</p>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-4">අපව අනුගමනය කරන්න</h3>
                <div class="flex space-x-4">
                    <a href="https://www.facebook.com/profile.php?id=61571342452577&mibextid=ZbWKwL" class="hover:text-pink-300">Facebook</a>
                    <a href="#" class="hover:text-pink-300">Instagram</a>
                    <a href="#" class="hover:text-pink-300">Twitter</a>
                </div>
            </div>
        </div>
        <div class="mt-8 text-center">
            <p>&copy; 2024 සෝස ලංකා. සියලුම හිමිකම් ඇවිරිණි.</p>
        </div>
    </div>
</footer>

<script>
    // Product data
    const products = [
        {
            id: 1,
            name: "රෝස ක්‍රීම්",
            description: "සුවඳවත් රෝස ක්‍රීම්",
            price: 1500,
            image: "/api/placeholder/300/300"
        },
        {
            id: 2,
            name: "ආයුර්වේද ක්‍රීම්",
            description: "සම්ප්‍රදායික ආයුර්වේද ක්‍රීම්",
            price: 2000,
            image: "/api/placeholder/300/300"
        },
        {
            id: 3,
            name: "අලෝ වෙරා ක්‍රීම්",
            description: "ස්වභාවික අලෝ වෙරා ක්‍රීම්",
            price: 1800,
            image: "/api/placeholder/300/300"
        }
    ];

    // Initialize cart array
    let cart = [];

    // Cart toggle function
    function toggleCart() {
        const sidebar = document.getElementById('cart-sidebar');
        sidebar.classList.toggle('translate-x-full');
    }

    // Update cart count
    function updateCartCount() {
        const count = document.getElementById('cart-count');
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        count.textContent = total;
        count.classList.toggle('hidden', total === 0);
    }

    // Update cart total
    function updateCartTotal() {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        document.getElementById('cart-total').textContent = `රු. ${total.toFixed(2)}`;
    }

    // Add to cart function
    function addToCart(productId) {
        const product = products.find(p => p.id === productId);
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCartCount();
        updateCartTotal();
        renderCartItems();
    }

    // Remove from cart function
    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCartCount();
        updateCartTotal();
        renderCartItems();
    }

    // Render cart items
    function renderCartItems() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = cart.map(item => `
            <div class="flex justify-between items-center">
                <div>
                    <h4 class="font-bold">${item.name}</h4>
                    <p>රු. ${item.price.toFixed(2)} x ${item.quantity}</p>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                </button>
            </div>
        `).join('');
    }

    // Checkout function
    function checkout() {
        if (cart.length === 0) {
            alert('කරුණාකර භාණ්ඩ තෝරන්න');
            return;
        }
        alert('ඇණවුම සාර්ථකයි!');
        cart = [];
        updateCartCount();
        updateCartTotal();
        renderCartItems();
        toggleCart();
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
        // Remove loading screen
        document.querySelector('.loading').classList.add('hidden');

        // Initialize ThreeJS
        initThreeJS();

        // Render products
        renderProducts();

        // Handle contact form submission
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('පණිවිඩය සාර්ථකව යවා ඇත!');
            e.target.reset();
        });

        // Add scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    });
</script>
</body>
</html>
