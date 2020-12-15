# format2money
js library for convert number format to money format library for javascript or typrscript.

### Install
```sh
$ npm install format2money # or yarn add format2money
```

### Example

```javascript
import format2money from 'format2money'
let option = {
   local: 'THB',
   decimal: 2
}
let result = format2money.format(1695000, option)
console.log(result) //1,695,000.00฿
```

### Option
| Field | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| local | String | null | Currency code 3 character (Ex. USD, EUR, THB, JPY, RUB, GBP, ...*(see in Currency Code List below)*) |
| decimal | Number or String | 0 | 0-10 for decimal places |

### Currency Code List
1. USD
2. THB
3. EUR
4. JPY
5. RUB
6. GBP
7. CAD
8. CHF
9. CNY
10. HKD

*(Update current code at December 14, 2020)*

### License
This project is licensed under the MIT License - see the [license](https://github.com/ballsurakiat/format2money/blob/main/LICENSE) file for details.