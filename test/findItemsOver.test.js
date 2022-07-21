var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

let itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

let assert = require('assert');
let findItemsOver = require('../findItemsOver');

describe('findItemsOver function', function(){

    it('should find items with the quantity over 15 in a list', function(){

        assert.deepEqual([{name : 'pears', qty : 19},{name : 'bananas', qty : 17}], findItemsOver(itemList2,15))
    });

    it('should find items with the quantity over 22 in a list', function(){

        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23}, {name : 'apples', qty : 37}], findItemsOver(itemList3,22))
    });
    it('should find items with the quantity over 22 in a list', function(){

        assert.deepEqual([], findItemsOver(itemList2,20))
    });
});