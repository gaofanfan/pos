function printInventory(inputs) {
  var cartItems = [];

  for(var i = 0; i < inputs.length; i++) {
    var cartItem = findCartItem(inputs[i].barcode, cartItems);
    if(!cartItem) {
      cartItems.push({barcode: inputs[i].barcode ,
        name: inputs[i].name,
        unit:inputs[i].unit,
        price:inputs[i].price,
        count: 1
      });
    }else{
      cartItem.count ++;
    }
  }
  getText(cartItems);
}

function getText(cartItems){
  var itemsText ='';
  var totalamount = 0;
  var itemtotal = 0;

  for(var i = 0; i < cartItems.length; i++){
    var getcartItems = cartItems[i];
    itemsText += '名称：'+ getcartItems.name +
    '，数量：'+ getcartItems.count +
    cartItems[i].unit +'，单价：' +
    (getcartItems.price).toFixed(2) +
    '(元)，小计：' +(getcartItems.count * getcartItems.price).toFixed(2) + '(元)\n';
    itemtotal = getcartItems.count * getcartItems.price;
    totalamount += itemtotal;
  }
  var inventorytext ='***<没钱赚商店>购物清单***\n' +
  itemsText +'----------------------\n' +
  '总计：' +totalamount.toFixed(2) + '(元)\n' +
  '**********************';
  console.log(inventorytext);
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
