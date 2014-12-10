function printInventory(tags) {

  var cartItems = getcartItems(tags);
  var inventorytext = getText(cartItems);
  console.log(inventorytext);

}

function getcartItems(tags) {
  var  cartItems = [];
  var allItems = loadAllItems();

  for(var i = 0; i < tags.length; i++) {
    var splitArray = tags[i].split('-');
    barcode = splitArray[0];
    count = 1;

    if(splitArray[1]) {
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

function getText(cartItems) {

  var inventorytext = '***<没钱赚商店>购物清单***\n';
  var summaryText = '';
  var promotions = loadPromotions();
  var sumtotal = 0;
  var subtotal = 0;
  var saveMoney = 0;
  var itemsText= '';
  var currTime = moment().format('YYYY年MM月DD日 HH:mm:ss');

  var promotionText = getpromotionText(cartItems);

  for(var i = 0; i < cartItems.length; i++) {
    var count = cartItems[i].count;
    var promotionitem = findpromotionitem(cartItems[i].item.barcode,promotions[0]);
    if( promotionitem) {
      count = cartItems[i].count - Math.floor(cartItems[i].count / 3);
    }
    saveMoney += cartItems[i].item.price * Math.floor(cartItems[i].count / 3);
    subtotal = (cartItems[i].item.price) * count;
    sumtotal += subtotal;
    itemsText += '名称：' + cartItems[i].item.name +
    '，数量：' + cartItems[i].count + cartItems[i].item.unit
    + '，单价：' + cartItems[i].item.price.toFixed(2) +'(元)' +
    '，小计：' + subtotal.toFixed(2) + '(元)\n';
  }
  summaryText = '总计：' + sumtotal.toFixed(2) + '(元)\n';

  inventorytext += '打印时间：' + currTime + '\n'
   + '----------------------\n'
   + itemsText +
   '----------------------\n' +
   '挥泪赠送商品：\n' +
   promotionText +
  '----------------------\n'
  + summaryText
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
