function Promotion(type, barcodes) {
    this.type = type;
    this.barcodes = barcodes || [];
}

Promotion.all = function() {
  return [
    new Promotion('BUY_TWO_GET_ONE_FREE', [
    'ITEM000000',
    'ITEM000001',
    'ITEM000005'
    ])
    ];
  };
  Promotion.getPromotionText = function() {
  var promotionText = '';
  var saveMoney = 0;

  for(var i = 0; i < cartItems.length; i++) {
    var promotionitem = findpromotionitem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      promotionText += '名称：' + cartItems[i].item.name +
      '，数量：' + Math.floor(cartItems[i].count / 3)
      + cartItems[i].item.unit + '\n';

      saveMoney += cartItems[i].item.price * Math.floor(cartItems[i].count / 3);
    }
  }
  return promotionText;
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
