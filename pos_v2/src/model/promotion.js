function Promotion(type, barcodes) {
  this.type = type;
  this.barcodes = barcodes || [];
}

Promotion.all = function() {
  return loadPromotions();
}
    //
    // Promotion.getpromotionText = function(cartItems) {
    //   var promotions = loadPromotions();
    //   var promotionText = '';
    //
    //   _.forEach(cartItems, function(cartItem) {
    //     var item = cartItem.item;
    //     var promotionitem = _.find(promotions[0].barcodes,function(barcode) {
    //       return barcode === item.barcode;
    //     });
    //
    //     if (promotionitem) {
    //       promotionText += '名称：' + item.name +
    //         '，数量：' + Math.floor(cartItem.count / 3) +
    //         item.unit + '\n';
    //     }
    //   });
    //   return promotionText;
    // };

          // for(var i = 0; i < cartItems.length; i++) {
          //   var item = cartItems[i].item;
          //   var promotionitem = Promotion.findpromotionitem(item.barcode,promotions[0]);
          //   if( promotionitem) {
          //     promotionText += '名称：' + item.name +
          //       '，数量：' + Math.floor(cartItems[i].count / 3)
          //       + item.unit + '\n';
          //   }
          // }

          // Promotion.findpromotionitem = function(barcode,promotion) {
          //     var promotionitem;
          //
          //     for(var i = 0;i < promotion.barcodes.length;i++) {
          //       if(promotion.barcodes[i] === barcode) {
          //         promotionitem = promotion.barcodes[i];
          //       }
          //     }
          //     return promotionitem;
          //   }
