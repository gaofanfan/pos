function printInventory(items) {
  var itemsText = '';
  var totalamount = 0;

  for(var i = 0; i < items.length; i++) {
    var item = items[i];
    var itemtotal = item.count * item.price;
    itemsText += '名称：' + item.name +
      '，数量：' + item.count + item.unit +
      '，单价：' + item.price.toFixed(2) +
      '(元)，小计：' + itemtotal.toFixed(2) +'(元)\n';

    totalamount += itemtotal;
   }

   var inventorytext =
      '***<没钱赚商店>购物清单***\n' +
      itemsText +
      '----------------------\n' +
      '总计：' + totalamount.toFixed(2) + '(元)\n' +

      '**********************';
   console.log(inventorytext);
 }
