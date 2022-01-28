# vue-currency-format
 A Vue.js filter for formatting currency. This is super useful when working with applications that display pricing. It works well with Stripe currency formatting ie 1025 becomes £10.25


 ## Installation

 To install from npm

`npm install vue-currency-format --save`

Then include it in your main vue file.

```
import VueCurrencyFormat from 'vue-currency-format'
Vue.use(VueCurrencyFormat);
```

You can also include some global options.

```
import VueCurrencyFormat from 'vue-currency-format'

Vue.use(VueCurrencyFormat,{
    local: 'en',
    currency: 'GBP',
    hideSubUnits: false,
    subunitsValue: true
});
```

Then in your vue component you can use it like this.
`{{1025 | currency}}` The result would be `£10.25`

or you can pass in options on an individual basis
`{{1025 | currency(locale,currency,hideSubUnits,subunitsValue)}}`

## Options


| Option  | Default Value | Description
| ------------- | ------------- | -------------
| Locale | en  | A [BCP 47](https://tools.ietf.org/html/bcp47) language tag (for example en or de-DE). Default is undefined (use the runtime's default locale).
| Currency  | GBP  | A [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code (for example USD or EUR).
| hideSubUnits | false | Whether or not to show the sub units ie 1045 would be displayed as £10
| subunitsValue | true | When set to true 1045 would be displayed as £1,025.00






