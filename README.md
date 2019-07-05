# relative-time-format

[![npm version](https://img.shields.io/npm/v/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![npm downloads](https://img.shields.io/npm/dm/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![coverage](https://img.shields.io/coveralls/catamphetamine/relative-time-format/master.svg?style=flat-square)](https://coveralls.io/r/catamphetamine/relative-time-format?branch=master)

A convenient [`Intl.RelativeTimeFormat`](https://github.com/tc39/proposal-intl-relative-time) polyfill. No dependencies (doesn't require [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules) or anything like that). Only `8.5 kB` in size (`2.7 kB` gzipped).

[See Demo](https://catamphetamine.github.io/relative-time-format/)

## Install

```
npm install relative-time-format --save
```

If you're not using a bundler then use a [standalone version from a CDN](#cdn).

## Use

```js
import RelativeTimeFormat from "relative-time-format"
import en from "relative-time-format/locale/en.json"

RelativeTimeFormat.addLocale(en)

// Returns "2 days ago"
new RelativeTimeFormat("en", {
  style: "long" // other values: "short" or "narrow"
}).format(-2, "day")
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

The `past` and `future` can be defined by any of: `zero`, `one`, `two`, `few`, `many` and `other`. For more info on which is which read the [official Unicode CLDR documentation](http://cldr.unicode.org/index/cldr-spec/plural-rules). [Unicode CLDR](http://cldr.unicode.org/) (Common Locale Data Repository) is an industry standard and is basically a collection of formatting rules for all locales (date, time, currency, measurement units, numbers, etc). All localizations come from [`cldr-dates-full`](https://github.com/unicode-cldr/cldr-dates-full) package (for example, [`en-US`](https://github.com/unicode-cldr/cldr-dates-full/blob/master/main/en-US-POSIX/dateFields.json)).

To determine whether a certain amount of time (number) is `one`, `few`, or something else, `relative-time-format` uses Unicode CLDR rules for formatting plurals. These rules are number quantifying functions (one for each locale) which can tell if a number should be treated as `zero`, `one`, `two`, `few`, `many` or `other`. Knowing how these pluralization rules work is not required but anyway here are some links for curious advanced readers: [rules explanation](http://cldr.unicode.org/index/cldr-spec/plural-rules), [list of rules for all locales](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html), [list of rules for all locales in JSON format](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/plurals.json) (part of `cldr-core/supplemental` package), [converting those rules to javascript functions](https://github.com/eemeli/make-plural). These quantifying functions can be found as `quantify` properties of a locale data.

The `locale` folder is generated from CLDR data by running:

```sh
npm run generate-locales
```

Locale data is extracted from `cldr-data` (quantifiers) and `cldr-dates-full` (relative time messages) packages which usually get some updates once or twice a year.

```sh
npm install cldr-data@latest cldr-dates-full@latest make-plural@latest --save-dev
npm run generate-locales
```

## Higher-level API

`Intl.RelativeTimeFormat` is intentionally a low-level API. Third-party libraries are supposed to be built on top of this base-level API. An example of such library is [`javascript-time-ago`](https://github.com/catamphetamine/javascript-time-ago/) which uses `Intl.RelativeTimeFormat` internally and provides a higher-level API:

```js
import TimeAgo from 'javascript-time-ago'

// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en'

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en)

// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US')

timeAgo.format(new Date())
// "just now"

timeAgo.format(Date.now() - 60 * 1000)
// "a minute ago"

timeAgo.format(Date.now() - 2 * 60 * 60 * 1000)
// "2 hours ago"

timeAgo.format(Date.now() - 24 * 60 * 60 * 1000)
// "a day ago"
```

## CDN

One can use any npm CDN service, e.g. [unpkg.com](https://unpkg.com) or [jsdelivr.net](https://jsdelivr.net)

```html
<script src="https://unpkg.com/relative-time-format@[version]/bundle/relative-time-format.js"></script>

<script>
  var en = ... // Somehow import `relative-time-format/locale/en.json`.
  RelativeTimeFormat.addLocale(en)
  console.log(new RelativeTimeFormat('en').format(-1, 'days'))
</script>
```

where `[version]` is an npm package version range (for example, `0.2.x` or `^0.2.0`).

## Test262

There's a test suite of about 150 test cases for `Intl.RelativeTimeFormat` specification implementations. It's called "[Test262](https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/)". These tests check every possible imaginable aspect of formal correctness of a spec implementation including the weirdest cases imaginable like passing strings instead of numbers, passing objects having keys `0`, `1`, etc instead of arrays, passing objects with `toString()` method instead of a string, defining all class methods as special "non-enumerable" properties via `Object.defineProperty()` instead of the regular way everyone defines class methods in real life, and so on. Handling all these formal edge cases obscures and complicates the code and I'd prefer to keep things simple, so this library not passing all of the "Test262" test cases is a conscious choice and is intentional: it passes the functional correctness part and skips the non-real-life cases part.

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