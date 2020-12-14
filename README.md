# format2money
js library for convert number format to money format library for javascript or typrscript.

# Install
```sh
$ npm install format2money # or yarn add format2money
```

# Example

```javascript
import format2money from 'format2money'
let option = {
   local: 'THB',
   toFixed: 2
}
let result = format2money.format(1695000, option)
console.log(result) //฿1,695,000.00
```

# Option
| Field | Type | Description |
| ------ | ------ | ------ |
| local | (String) | Currency code 3 character (Ex. USD, EUR, THB, JPY, RUB, GBP) |
| toFixed | (Number) | 0-10 for decimal places |

# License
This project is licensed under the MIT License - see the [license](https://github.com/ballsurakiat/format2money/blob/main/LICENSE) file for details.