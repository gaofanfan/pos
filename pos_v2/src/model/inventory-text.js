function Inventorytext(cartItems) {
  this.cartItems = cartItems;
}

Inventorytext.getText = function(cartItems) {

    var inventorytext = '***<没钱赚商店>购物清单***\n';
    var summary = 0;
    var promotions = loadPromotions();
    var subtotal = 0;
    var saveMoney = 0;
    var itemsText ='';

    for(var i = 0; i < cartItems.length; i++) {
      var count = cartItems[i].count;
      var item = cartItems[i].item;
      //var promotionitem = Promotion.findpromotionitem(item.barcode,promotions[0]);
      var promotionitem = _.find(promotions[0].barcodes,function(barcode) {
        return barcode === item.barcode;
      });
      if (promotionitem) {
        count = count - Math.floor(count / 3);
      }

      subtotal = (item.price) * count;
      itemsText += '名称：' + item.name +
                   '，数量：' + cartItems[i].count + item.unit +
                   '，单价：' + item.price.toFixed(2) +'(元)' +
                   '，小计：' + subtotal.toFixed(2) + '(元)\n';
      saveMoney += item.price * Math.floor(cartItems[i].count / 3);
      summary += subtotal;
    }

    var promotionText = Promotion.getpromotionText(cartItems);

    inventorytext += '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') +'\n'
                     + '----------------------\n'
                     + itemsText +
                     '----------------------\n' +
                     '挥泪赠送商品：\n' +
                     promotionText +
                     '----------------------\n' +
                     '总计：' + summary.toFixed(2) + '(元)\n' +
                     '节省：' + saveMoney.toFixed(2) + '(元)\n' +
                     '**********************';
    return inventorytext;
};
