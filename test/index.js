const chai = require('chai');
const format2money = require('./../index');

const assert = chai.assert;

describe('Tests Format', () => {
    it('Case: THB Format decimal: 2', () => {
        let result = format2money.format(1695000, { local: 'THB', decimal: 2 })
        assert.equal(result, '1,695,000.00฿');
    });
    it('Case: THB Format no decimal', () => {
        let result = format2money.format(99900, { local: 'THB' })
        assert.equal(result, '99,900฿');
    });
    it('Case: USD Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'USD', decimal: 2 })
        assert.equal(result, '$12,334.00');

    });
    it('Case: USD Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'USD' })
        assert.equal(result, '$954,200,410');

    });
    it('Case: EUR Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'EUR', decimal: 2 })
        assert.equal(result, '€12,334.00');

    });
    it('Case: EUR Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'EUR' })
        assert.equal(result, '€954,200,410');

    });
    it('Case: JPY Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'JPY', decimal: 2 })
        assert.equal(result, '¥12,334.00');

    });
    it('Case: JPY Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'JPY' })
        assert.equal(result, '¥954,200,410');

    });
    it('Case: RUB Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'RUB', decimal: 2 })
        assert.equal(result, '12,334.00₽');

    });
    it('Case: RUB Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'RUB' })
        assert.equal(result, '954,200,410₽');

    });
    it('Case: GBP Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'GBP', decimal: 2 })
        assert.equal(result, '£12,334.00');

    });
    it('Case: GBP Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'GBP' })
        assert.equal(result, '£954,200,410');

    });
    it('Case: CAD Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'CAD', decimal: 2 })
        assert.equal(result, 'C$12,334.00');

    });
    it('Case: CAD Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'CAD' })
        assert.equal(result, 'C$954,200,410');

    });
    it('Case: CNY Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'CNY', decimal: 2 })
        assert.equal(result, '¥12,334.00');

    });
    it('Case: CNY Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'CNY' })
        assert.equal(result, '¥954,200,410');

    });
    it('Case: HKD Format decimal: 2', () => {
        let result = format2money.format(12334, { local: 'HKD', decimal: 2 })
        assert.equal(result, 'HK$12,334.00');

    });
    it('Case: HKD Format no decimal', () => {
        let result = format2money.format(954200410, { local: 'HKD' })
        assert.equal(result, 'HK$954,200,410');

    });
    it('Case: Format decimal: 2', () => {
        let result = format2money.format(500, { decimal: 2 })
        assert.equal(result, '500.00');
    });
    it('Case: Format no decimal', () => {
        let result = format2money.format(9000)
        assert.equal(result, '9,000');
    });
    it('Case: No option', () => {
        let result = format2money.format(1000)
        assert.equal(result, '1,000');
    });
    it('Case: Format decimal edge 0', () => {
        let result = format2money.format(12000, { decimal: 0 })
        assert.equal(result, '12,000');
    });
    it('Case: Format decimal edge 11', () => {
        let result = format2money.format(5000, { decimal: 11 })
        assert.equal(result, null);
    });
    it('Case: Format decimal string decimal: 5', () => {
        let result = format2money.format(66520, { decimal: '5' })
        assert.equal(result, '66,520.00000');
    });
    it('Case: Error Format decimal string', () => {
        let result = format2money.format('error now!', { decimal: 'error now!' })
        assert.equal(result, null);
    });
});
