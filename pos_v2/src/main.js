function printInventory(tags) {

  var cartItems = CartItem.getCartItems(tags);
  var inventorytext = Inventorytext.getText(cartItems);
  console.log(inventorytext);

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
function findpromotionitem(barcode,promotions) {
  var promotionitem;

  for(var i = 0;i < promotions.barcodes.length;i++) {
    if(promotions.barcodes[i] === barcode) {
      promotionitem = promotions.barcodes[i];
    }
  }
  return promotionitem;
}

function getpromotionText(cartItems) {
  var promotions = loadPromotions();
  var promotionText = '';

  for(var i = 0; i < cartItems.length; i++) {
    var promotionitem = findpromotionitem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      promotionText += '名称：' + cartItems[i].item.name +
      '，数量：' + Math.floor(cartItems[i].count / 3)
      + cartItems[i].item.unit + '\n';
    }
  }
  return promotionText;
}
