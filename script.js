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

/* Event Listeners */

// Listen for change events in #filtersContainer
filtersContainer.addEventListener('change', filterProducts);

// Listen for input events in #searchInput
searchInput.addEventListener('input', filterProducts);
   

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
/*   console.log(clickedButton);*/

  if(clickedButton.classList.contains('added')){

    // Remove product from cart
    clickedButton.classList.remove('added'); // Remove class

    // Change button text
    clickedButton.innerText = 'Add To Cart';

    // Change button color
    clickedButton.classList.remove('bg-red-600');
    clickedButton.classList.add('bg-gray-800');

    cartItemCount--; // Decrement cart count by 1
   
  } else {

    // Add product to cart
    clickedButton.classList.add('added'); // Add class

    // Change button text
    clickedButton.innerText = 'Remove From Cart';

    // Change button color
    clickedButton.classList.remove('bg-gray-800');
    clickedButton.classList.add('bg-red-600'); 

    cartItemCount++; // Increment cart count by 1

  }

  // Update cart item count
  cartCount.innerText = cartItemCount.toString();

}

function filterProducts(){

  // Get search term
  const searchTerm = searchInput.value
                      .trim() // Remove white spaces 
                      .toLowerCase(); // Convert to lower case

  // Get checked filters
  const checkedFilters = Array.from(checkBoxes)
                          .filter((check) => check.checked)
                          .map((check) => check.id); 
                          /* Filtering Checked Checkboxes:
                          
                              Array.from(checkBoxes): 
                              Converts the NodeList into an actual array to allow for the use of array methods like .filter().
                              
                              .filter(): 
                              Loops through each checkbox in the array and checks if it is currently checked (check.checked returns true if the checkbox is checked).

                              .map():
                              Selects only the id of filter element
                              
                              The resulting array, `checkedFilters`, contains only the IDs of checkbox elements that are checked. */

  console.log(checkedFilters);

}

