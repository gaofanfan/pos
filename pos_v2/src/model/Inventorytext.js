function Inventorytext(cartItems) {
  this.cartItems = cartItems;
}

Inventorytext.getText = function(cartItems) {

    var inventorytext = '***<没钱赚商店>购物清单***\n';
    var summaryText = 0;
    var promotions = loadPromotions();
    var subtotal = 0;
    var saveMoney = 0;
    var itemsText ='';
    var currTime = moment().format('YYYY年MM月DD日 HH:mm:ss');
    var promotionText = getpromotionText(cartItems);

    for(var i = 0; i < cartItems.length; i++) {
      var count = cartItems[i].count;
      var item = cartItems[i].item;
      var promotionitem = findpromotionitem(item.barcode,promotions[0]);
      if( promotionitem) {
        count = count - Math.floor(count / 3);
      }

      subtotal = (item.price) * count;
      itemsText += '名称：' + item.name +
                   '，数量：' + cartItems[i].count + item.unit
                   + '，单价：' + item.price.toFixed(2) +'(元)' +
                  '，小计：' + subtotal.toFixed(2) + '(元)\n';
      saveMoney += item.price * Math.floor(cartItems[i].count / 3);
      summaryText += subtotal;
    }


   inventorytext += '打印时间：' + currTime +'\n' +
                    '----------------------\n'
                    + itemsText +
                    '----------------------\n' +
                    '挥泪赠送商品：\n' +
                     promotionText +
                    '----------------------\n'
                    + '总计：' + summaryText.toFixed(2) + '(元)\n'
                    + '节省：' + saveMoney.toFixed(2) + '(元)\n'+
                    '**********************';
    return inventorytext;
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
