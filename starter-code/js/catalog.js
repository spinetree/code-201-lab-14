/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  
  var selectElement = document.getElementById('items');
  // Add an <option> tag inside the form's select for each product
  for (var i in Product.allProducts) {
     var option = document.createElement('option');
     option.value = Product.allProducts[i].name;
     option.textContent = Product.allProducts[i].name;  
     selectElement.appendChild(option);
  }
}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  // cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  var selectElement = document.getElementById('items');  
  var selectedItem = items.value;
  console.log(selectedItem);
  var quantity = document.getElementById('quantity');
  console.log('quantity: '+ quantity.value);
  new CartItem(selectedItem, quantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {}
  console.log('updating counter');
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div

function updateCartPreview() {
  console.log('updating cartPreview');
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
