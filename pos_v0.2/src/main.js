function printInventory(barcode) {
   var items = [];
   var allItems = loadAllItems();
   for(var i = 0;i < barcode.length;i++) {
     var item = findItem(allItems,barcode[i]);
     items.push(item);
   }
  var cartItems = [];
  for(var i = 0; i < items.length; i++) {
    var cartItem = findCartItem(items[i].barcode, cartItems);
    if(!cartItem) {
      cartItems.push({barcode: items[i].barcode ,
        name: items[i].name,
        unit:items[i].unit,
        price:items[i].price,
        count: 1
      });
    }else{
      cartItem.count ++;
  }
}
  getText(cartItems);

}

function findItem(allItems,barcode) {
  var item;
  for(var i = 0;i < allItems.length;i++) {
    if(allItems[i].barcode === barcode) {
      item = allItems[i];
    }
  }
  return item;
}

function findCartItem(barcode, cartItems){
  var cartItem;

  for(var i = 0; i < cartItems.length; i++){
    if(cartItems[i].barcode == barcode){
      cartItem = cartItems[i];
    }
  }
  return cartItem;
}

function getText(cartItems){
  var itemsText ='';
  var totalamount = 0;
  var itemtotal = 0;

  for(var i = 0; i < cartItems.length; i++){
    var getcartItems = cartItems[i];

    var itemtotal = finditemtotal(getcartItems.count,getcartItems.price);
    itemsText += '名称：'+ getcartItems.name +
    '，数量：'+ getcartItems.count +
    cartItems[i].unit +'，单价：' +
    (getcartItems.price).toFixed(2) +
    '(元)，小计：' +itemtotal.toFixed(2) + '(元)\n';
    totalamount += itemtotal;
  }
  var inventorytext ='***<没钱赚商店>购物清单***\n' +
  itemsText +'----------------------\n' +
  '总计：' +totalamount.toFixed(2) + '(元)\n' +
  '**********************';
  console.log(inventorytext);
}

function finditemtotal(count,price) {
  return count * price;
}
