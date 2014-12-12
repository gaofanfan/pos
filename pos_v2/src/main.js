function printInventory(tags) {

  var cartItems = CartItem.getCartItems(tags);
  var inventoryText = Inventorytext.getText(cartItems);

  console.log(inventoryText);

}
