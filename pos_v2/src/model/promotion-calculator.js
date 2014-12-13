function PromotionCalculator() {

}

PromotionCalculator.calculate = function(cartItem, promotions) {
  _.forEach(promotions, function(promotion) {
    var isPromotion = _.contains(promotion.barcodes, cartItem.getBarcode());
    if (isPromotion) {
      if (promotion.type === 'BUY_TWO_GET_ONE_FREE') {
        cartItem.savedCount = Math.floor(cartItem.count / 3);
        cartItem.savedPrice = cartItem.savedCount * cartItem.getPrice();
      }
    }
  });
};

PromotionCalculator.calculateCartItems = function(cartItems, promotions) {
  _.forEach(cartItems, function(cartItem){
    PromotionCalculator.calculate(cartItem, promotions);
  });
}
