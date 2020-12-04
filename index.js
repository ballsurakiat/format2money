const formate2money = {
    format: (number, option) => {
        let prefix = getPrefixSymbol(option.local)
        if (!number) {
            return null
        } else {
            number = prefix+String(parseInt(number).toLocaleString()) //.toFixed(option.toFixed || 2)
            return number
        }
    }
}

module.exports = formate2money

const getPrefixSymbol = (local) => {
    switch (local) {
        case 'THB':
            return '฿';
        case 'USD':
            return '$';
        case 'EUR':
            return '€';
        case 'JPY':
            return '¥';
        case 'RUB':
            return '₽';
        case 'GBP':
            return '£';
        default:
            return '';
    }
}