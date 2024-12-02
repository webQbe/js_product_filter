// Define Products Array
const products = [
    {
      name: 'Sony Playstation 5',
      url: 'images/playstation_5.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung Galaxy',
      url: 'images/samsung_galaxy.png',
      category: 'smartphones',
      price: 399.99,
    },
    {
      name: 'Cannon EOS Camera',
      url: 'images/cannon_eos_camera.png',
      category: 'cameras',
      price: 749.99,
    },
    {
      name: 'Sony A7 Camera',
      url: 'images/sony_a7_camera.png',
      category: 'cameras',
      price: 1999.99,
    },
    {
      name: 'LG TV',
      url: 'images/lg_tv.png',
      category: 'televisions',
      price: 799.99,
    },
    {
      name: 'Nintendo Switch',
      url: 'images/nintendo_switch.png',
      category: 'games',
      price: 299.99,
    },
    {
      name: 'Xbox Series X',
      url: 'images/xbox_series_x.png',
      category: 'games',
      price: 499.99,
    },
    {
      name: 'Samsung TV',
      url: 'images/samsung_tv.png',
      category: 'televisions',
      price: 1099.99,
    },
    {
      name: 'Google Pixel',
      url: 'images/google_pixel.png',
      category: 'smartphones',
      price: 499.99,
    },
    {
      name: 'Sony ZV1F Camera',
      url: 'images/sony_zv1f_camera.png',
      category: 'cameras',
      price: 799.99,
    },
    {
      name: 'Toshiba TV',
      url: 'images/toshiba_tv.png',
      category: 'televisions',
      price: 499.99,
    },
    {
      name: 'iPhone 14',
      url: 'images/iphone_14.png',
      category: 'smartphones',
      price: 999.99,
    },
  ];

// Define DOM Elements
const productsWrapper = document.getElementById('products-wrapper'); 
const checkBoxes = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container'); 
const searchInput = document.getElementById('search');
const cartCount = document.getElementById('cart-count');  

// Initialize Cart Item Count
let cartItemCount = 0;

// Initialize Product Element Array
const productElements = [];

// Loop Through Products Array
products.forEach((product) => {
  
  // Create productElement
  const productElement = createProductElement(product);

  // Add current element to array
  productElements.push(productElement);

  // Add current product to DOM
  productsWrapper.appendChild(productElement);

  
});


function createProductElement(product){

  // Create div element for current product
  const productElement = document.createElement('div');

  // Add classes to the div
  productElement.className = 'item space-y-2';

  // Add innerHTML with data from products array
  productElement.innerHTML = `<div class="bg-gray-100 flex 
                              justify-center relative overflow-hidden group cursor-pointer border rounded-xl w-full h-50">

                                <img src="${product.url}" alt="${product.name}" class="w-full h-full object-cover">

                                <button class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add To Cart</button> 

                              </div> 
                              <p class="text-xl">${product.name}</p>
                              <strong>$${product.price.toLocaleString()}</strong>`;

                              // product.price.toLocaleString() : adds 1,000 separators
  
  // Listen for click events in 'Add To Cart' button
  productElement.querySelector('.status').addEventListener('click', updateCart);

  return productElement;

}

// Add or Remove Item from Cart
function updateCart(e){

  const clickedButton = e.target;
  console.log(clickedButton);

}