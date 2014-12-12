function CartItem(tags, count) {
  this.tags = tags;
  this.count = count || 0;
}

CartItem.getCartItems = function(tags) {
  var cartItems = [];
  var allItems = loadAllItems();
  _.forEach(tags,function(tags){
    var splitArray = tags[i].split('-');
    var barcode = splitArray[0];
    var count = 1;

    if (splitArray[1]) {
      count = parseFloat(splitArray[1]);
    }  
    var cartItem = _.find(cartItems,function(cartItem,barcode){
      return cartItem.item.barcode === barcode;
    });

    if (cartItem) {
      cartItem.count += count;
    } else {
      var newitem = CartItem.findItem(allItems,barcode);
      cartItems.push({ item: newitem, count: count});
    }
  }
});
  return cartItems;
}
  // for(var i = 0; i < tags.length; i++) {
  //   var splitArray = tags[i].split('-');
  //   var barcode = splitArray[0];
  //   var count = 1;
  //
  //   if (splitArray[1]) {
  //     count = parseFloat(splitArray[1]);
  //   }
  //
  //   var cartItem = CartItem.findCartItem(barcode, cartItems);
  //
  //   if (cartItem) {
  //     cartItem.count += count;
  //   } else {
  //     var newitem = CartItem.findItem(allItems,barcode);
  //     cartItems.push({ item: newitem, count: count});
  //   }
  // }
// CartItem.findCartItem = function(barcode, cartItems) {
//   var cartItem;
//
//   for(var i = 0; i < cartItems.length; i++) {
//     if (cartItems[i].item.barcode === barcode) {
//       cartItem = cartItems[i];
//     }
//   }
//   return cartItem;
// }

CartItem.findItem = function(allItems,barcode) {
  var newitem;

  for(var i = 0;i < allItems.length;i++) {
    if (allItems[i].barcode === barcode) {
      newitem = allItems[i];
    }
  }
  return newitem;
}
