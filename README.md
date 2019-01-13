# relative-time-format

[![npm version](https://img.shields.io/npm/v/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![npm downloads](https://img.shields.io/npm/dm/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![coverage](https://img.shields.io/coveralls/catamphetamine/relative-time-format/master.svg?style=flat-square)](https://coveralls.io/r/catamphetamine/relative-time-format?branch=master)

[`Intl.RelativeTimeFormat`](https://github.com/tc39/proposal-intl-relative-time) polyfill.

## Install

```
npm install relative-time-format --save
```

## Use

```js
import RelativeTimeFormat from 'relative-time-format'
import en from 'relative-time-format/locale/en'

RelativeTimeFormat.addLocale(en)

// Returns "2 days ago"
new RelativeTimeFormat('en').format(-2, 'day')
```

## Locales

The localization resides in the [`locale`](https://github.com/catamphetamine/relative-time-format/tree/master/locale) folder. The format of a localization is:

```js
{
  …
  "day": {
    "past": {
      "one": "{0} day ago",
      "other": "{0} days ago"
    },
    "future": {
      "one": "in {0} day",
      "other": "in {0} days"
    }
  },
  …
}
```

The `past` and `future` can be defined by any of: `zero`, `one`, `two`, `few`, `many` and `other`. For more info on which is which read the [official Unicode CLDR documentation](http://cldr.unicode.org/index/cldr-spec/plural-rules). [Unicode CLDR](http://cldr.unicode.org/) (Common Locale Data Repository) is an industry standard and is basically a collection of formatting rules for all locales (date, time, currency, measurement units, numbers, etc).

To determine whether a certain amount of time (number) is `one`, `few`, or something else, `relative-time-format` uses Unicode CLDR rules for formatting plurals. These rules are number quantifying functions (one for each locale) which can tell if a number should be treated as `zero`, `one`, `two`, `few`, `many` or `other`. Knowing how these pluralization rules work is not required but anyway here are some links for curious advanced readers: [rules explanation](http://cldr.unicode.org/index/cldr-spec/plural-rules), [list of rules for all locales](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html), [converting those rules to javascript functions](https://github.com/eemeli/make-plural.js). These quantifying functions can be found as `quantify` properties of a locale data.

The `locale` folder is generated from CLDR data by running:

```sh
npm run generate-locales
```

Locale data is extracted from `cldr-data` (quantifiers) and `cldr-dates-full` (relative time messages) packages which usually get some updates once or twice a year.

```sh
npm install cldr-data@latest cldr-dates-full@latest --save
npm run generate-locales
```

## Contributing

After cloning this repo, ensure dependencies are installed by running:

```sh
npm install
```

This module is written in ES6 and uses [Babel](http://babeljs.io/) for ES5
transpilation. Widely consumable JavaScript can be produced by running:

```sh
npm run build
```

Once `npm run build` has run, you may `import` or `require()` directly from
node.

After developing, the full test suite can be evaluated by running:

```sh
npm test
```

When you're ready to test your new functionality on a real project, you can run

```sh
npm pack
```

It will `build`, `test` and then create a `.tgz` archive which you can then install in your project folder

```sh
npm install [package-name]-[version].tar.gz
```

## License

[MIT](LICENSE)