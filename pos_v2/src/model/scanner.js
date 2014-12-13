function Scanner(items) {
  this.items = items;
}

Scanner.prototype.scan = function(tag) {

  var tagArray = tag.split('-');
  var barcode = tagArray[0];
  var count = 1;

  var hasCount = !!tagArray[1];
  if (hasCount) {
    count = parseFloat(tagArray[1]);
  }

  var item = _.find(this.items, { barcode: barcode });

  return new CartItem(item, count);
};
