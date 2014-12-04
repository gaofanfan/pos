function printInventory(inputs) {
  var cartItems = [];
  for(var i = 0; i < inputs.length; i++){
    var cartItem = findCartItem(inputs[i].barcode, cartItems);
    if(!cartItem){
      cartItems.push(
        {barcode: inputs[i].barcode ,
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
  for(var i = 0; i < cartItems.length; i++){
    itemsText += '名称：'+ cartItems[i].name +'，数量：'+ cartItems[i].count +
    cartItems[i].unit +
    '，单价：' + (cartItems[i].price).toFixed(2) + '(元)，小计：' +
    (cartItems[i].count * cartItems[i].price).toFixed(2) + '(元)\n';
    var itemtotal = (cartItems[i].count * cartItems[i].price);
    totalamount += itemtotal;
  }


  var inventorytext =
   '***<没钱赚商店>购物清单***\n' +
   itemsText +
   '----------------------\n' +
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
