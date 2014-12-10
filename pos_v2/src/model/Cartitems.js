function CartItem(item, count) {
  this.item = item;
  this.count = count || 0;
}

CartItem.getCartItems = function(items) {

  var  cartItems = [];
  var allItems = loadAllItems();

  for(var i = 0; i < tags.length; i++) {
    var splitArray = tags[i].split('-');
    barcode = splitArray[0];
    count = 1;

    if(splitArray[1]){
      count = parseFloat(splitArray[1]);
    }

    var cartItem = findCartItem(barcode, cartItems);

    if(cartItem) {
      cartItem.count += count;
    } else {
      var  newitem = findItem(allItems,barcode);
      cartItems.push({ item: newitem , count: count});
    }
  }

  return cartItems;
}

function findCartItem(barcode, cartItems) {
  var cartItem;

  for(var i = 0; i < cartItems.length; i++) {
    if(cartItems[i].item.barcode === barcode){
      cartItem = cartItems[i];
    }
  }
  return cartItem;
}

function findItem(allItems,barcode) {
  var newitem;

  for(var i = 0;i < allItems.length;i++) {
    if(allItems[i].barcode === barcode) {
      newitem = allItems[i];
    }
  }
  return newitem;
}
