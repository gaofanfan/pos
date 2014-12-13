function CartItem(item, count) {
  this.item = item;
  this.count = count || 0;
  this.savedCount = 0;
  this.savedPrice = 0;
}

CartItem.prototype.getBarcode = function() {
  return this.item.barcode;
};

CartItem.prototype.getPrice = function() {
  return this.item.price;
};

CartItem.prototype.hasPromotion = function() {
  return this.savedCount !== 0 || this.savedPrice !== 0;
};

CartItem.prototype.getOriginSubtotal = function() {
  return this.item.price * this.count;
};

CartItem.prototype.getSubtotal = function() {
  return this.getOriginSubtotal() - this.savedPrice;
};

CartItem.prototype.toString = function() {
  return '名称：' + this.item.name +
  '，数量：' + this.count + this.item.unit +
  '，单价：' + this.item.price.toFixed(2) +
  '(元)，小计：' + this.getSubtotal().toFixed(2) + '(元)';
};

CartItem.prototype.toPromotionString = function() {
  return '名称：' + this.item.name + '，数量：' + this.savedCount + this.item.unit;
};
