function printInventory(tags) {

  var cartItems = CartItem.getCartItems(tags);
  var inventorytext = Inventorytext.getText(cartItems);
  
  console.log(inventorytext);

}
