# vue-currency-format
 A Vue.js filter for formatting currency


 ## Installation

 To install from npm

`npm install vue-currency-format --save`

Then include it in your main vue file.

```
import VueCurrencyFormat from '@/components/vue-currency-format'
Vue.use(VueCurrencyFormat);
```

You can also include some global options.

```
import VueCurrencyFormat from '@/components/vue-currency-format'

Vue.use(VueCurrencyFormat,{
    local: 'en',
    currency: 'GBP',
    hideSubUnits: false,
    subunitsValue: true
});
```

Then in your vue component you can use it like this.
`{{1025 | currency}}` The result would be `£10.25`

or you can pass in options
`{{1025 | currency(locale,currency,hideSubUnits,subunitsValue)}}`

## Options


| Option  | Default Value | Description
| ------------- | ------------- | -------------
| Locale | 'en'  | A BCP 47 language tag (for example en or de-DE). Default is undefined (use the runtime's default locale).
| Content Cell  | Content Cell  |






