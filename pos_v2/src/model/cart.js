function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function(cartItem) {
  var existCartItem = _.find(this.cartItems, function(existCartItem) {
    return existCartItem.getBarcode() === cartItem.getBarcode();
  });

  if (existCartItem) {
    existCartItem.count += cartItem.count;
  } else {
    this.cartItems.push(cartItem);
  }
};

Cart.prototype.getTotalAmount = function() {
  var totalAmount = 0;

  _.forEach(this.cartItems, function(cartItem) {
    totalAmount += cartItem.getSubtotal();
  });

  return totalAmount;
}

Cart.prototype.getSavedAmount = function() {
  var savedAmount = 0;

  _.forEach(this.cartItems, function(cartItem) {
    savedAmount += cartItem.savedPrice;
  });

  return savedAmount;
};

Cart.prototype.toString = function() {

  var cartItemsText = '';
  var promotionText = '';

  _.forEach(this.cartItems, function(cartItem) {
    cartItemsText += cartItem.toString() + '\n';
    if (cartItem.hasPromotion()) {
      promotionText += cartItem.toPromotionString() + '\n';
    }
  });


  return '***<没钱赚商店>购物清单***\n' +
  '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
  '----------------------\n' +
  cartItemsText +
  '----------------------\n' +
  '挥泪赠送商品：\n' +
  promotionText +
  '----------------------\n' +
  '总计：' + this.getTotalAmount().toFixed(2) + '(元)\n' +
  '节省：' + this.getSavedAmount().toFixed(2) + '(元)\n' +
  '**********************';
};
