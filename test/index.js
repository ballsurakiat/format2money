const chai = require('chai');
const format2money = require('./../index');

const assert = chai.assert;
const option = {
    toFixed: 2,
    local: 'THB',
}

describe('Tests', () => {
    it('Test: (TH Baht) Format', () => {
        option.local = 'THB'
        option.toFixed = 2
        let result = format2money.format(1695000, option)
        assert.equal(result, '฿1,695,000.00');
    });
    it('Test: (TH Baht) Format no toFixed', () => {
        option.local = 'THB'
        option.toFixed = null
        let result = format2money.format(99900, option)
        assert.equal(result, '฿99,900');
    });
    it('Test: (US Dollar) Format', () => {
        option.local = 'USD'
        option.toFixed = 2
        let result = format2money.format(12334, option)
        assert.equal(result, '$12,334.00');

    });
    it('Test: (US Dollar) Format no toFixed', () => {
        option.toFixed = null
        option.local = 'USD'
        let result = format2money.format(954200410, option)
        assert.equal(result, '$954,200,410');

    });
    it('Test: (Defualt) Format', () => {
        option.toFixed = 2
        option.local = ''
        let result = format2money.format(500, option)
        assert.equal(result, '500.00');
    });
    it('Test: (Defualt) Format no toFixed', () => {
        option.local = ''
        option.toFixed = null
        let result = format2money.format(9000, option)
        assert.equal(result, '9,000');
    });
});
