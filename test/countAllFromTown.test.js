let assert = require('assert');
let countAllFromTown = require('../countAllFromTown');

describe('countAllFromTown Function', function(){

    it('should be able to count how many reistrations are from Cape Town ', function(){

        assert.equal(2, countAllFromTown('CA 123, CJ 897, CA 563, CY 894', 'CA'));
    });
    it('should be able to count how many reistrations are from George', function(){

        assert.equal(1, countAllFromTown('CA 123, CJ 897, CAW 563, CY 894', 'CAW'));
    });

    it('should be able to count how many reistrations are from Beaufort West', function(){

        assert.equal(3, countAllFromTown('CA 123, CJ 897, CA 563, CZ 894, CZ 7856, CAW 7612,CZ 96558', 'CZ'));
    });
});