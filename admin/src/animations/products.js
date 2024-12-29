// Function to render products
function renderProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card rounded-xl overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-bold text-pink-900 mb-2">${product.name}</h3>
                <p class="text-pink-700 mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-lg font-bold text-pink-900">රු. ${product.price.toFixed(2)}</span>
                    <button 
                        onclick="addToCart(${product.id})" 
                        class="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-all btn-hover"
                    >
                        කාට්ටුවට එක් කරන්න
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize product search and filtering
function initializeProductSearch() {
    const searchInput = document.getElementById('product-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) || 
                product.description.toLowerCase().includes(searchTerm)
            );
            renderFilteredProducts(filteredProducts);
        });
    }
}

function renderFilteredProducts(filteredProducts) {
    const productsGrid = document.getElementById('products-grid');
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="col-span-full text-center text-pink-900">නිෂ්පාදන හමු නොවීය</p>';
    } else {
        renderProducts(filteredProducts);
    }
}
