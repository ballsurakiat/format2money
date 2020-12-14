const formate2money = {
    format: (number, option) => {
        try {
            let decimal = typeof option == 'undefined' ? '' : option.decimal
            let local = typeof option == 'undefined' ? '' : option.local
            if (!number) {
                return null
            } else if (parseInt(decimal) >= 11) {
                return null
            } else {
                return getPrefixSymbol(typeof local == 'undefined' ? '' : local, String(parseInt(number).toLocaleString(undefined, { minimumFractionDigits: decimal })))
            }
        } catch (error) {
            if (error) {
                return null
            }
        }
    }
}

module.exports = formate2money

const getPrefixSymbol = (local, number) => {
    switch (local) {
        case 'THB':
            return number + '฿';
        case 'USD':
            return '$' + number;
        case 'EUR':
            return '€' + number;
        case 'JPY':
            return '¥' + number;
        case 'RUB':
            return number + '₽';
        case 'GBP':
            return '£' + number;
        case 'CAD':
            return 'C$' + number
        case 'CHF':
            return number + 'CHf'
        case 'CNY':
            return '¥' + number
        case 'HKD':
            return 'HK$' + number
        default:
            return number;
    }
}