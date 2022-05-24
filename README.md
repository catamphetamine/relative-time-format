# relative-time-format

[![npm version](https://img.shields.io/npm/v/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![npm downloads](https://img.shields.io/npm/dm/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![npm size](https://img.shields.io/bundlephobia/minzip/relative-time-format.svg?label=size)](https://www.npmjs.com/package/relative-time-format)
[![coverage](https://img.shields.io/coveralls/catamphetamine/relative-time-format/master.svg?style=flat-square)](https://coveralls.io/r/catamphetamine/relative-time-format?branch=master)

This library consists of three parts:

* A convenient [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) polyfill. No dependencies (doesn't require [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules) because it's already [built in](https://github.com/catamphetamine/relative-time-format/blob/master/source/PluralRuleFunctions.js)).

* A high-level relative time formatting library.

* A React component for relative time formatting.

[See Demo](https://catamphetamine.github.io/relative-time-format/)

## Install

```
npm install relative-time-format --save
```

If you're not using a bundler then use a [standalone version from a CDN](#cdn).

## Use

```js
import RelativeTimeFormat from "relative-time-format"
import en from "relative-time-format/locale/en"

RelativeTimeFormat.addLocale(en)

// Returns "2 days ago"
new RelativeTimeFormat("en", {
  style: "long" // "long" is the default. Other options: "short", "narrow".
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

Locale data is extracted from `cldr-core` (quantifiers) and `cldr-dates-full` (relative time messages) packages which usually get some updates once or twice a year.

```sh
npm run update-locales
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
<script src="https://unpkg.com/relative-time-format@[version]/bundle/polyfill.js"></script>

<script>
  var en = ... // Somehow import `relative-time-format/locale/en`.
  RelativeTimeFormat.addLocale(en)
  console.log(new RelativeTimeFormat('en').format(-1, 'days'))
</script>
```

where `[version]` is an npm package version range (for example, `0.2.x` or `^0.2.0`).

## Test262

There's a test suite of about 150 test cases for `Intl.RelativeTimeFormat` specification implementations. It's called "[Test262](https://github.com/tc39/test262/blob/master/test/intl402/RelativeTimeFormat/)". These tests check every possible imaginable aspect of formal correctness of a spec implementation including the weirdest artificial cases imaginable like accepting strings instead of numbers, accepting objects having keys `0`, `1`, etc instead of arrays, accepting objects with `toString()` method instead of strings, defining all class methods as special "non-enumerable" properties via `Object.defineProperty()` instead of the regular way everyone defines class methods in real life, and so on. Handling all these formal edge cases would result in an unnecessarily convoluted and less readable code and I'd prefer to keep things simple and elegant, so this library intentionally chose not to pass all of the "Test262" test cases while still passing most of them: it [passes](https://github.com/catamphetamine/Intl.RelativeTimeFormat-test262) the functional correctness part and skips the not-relevant-in-real-life cases part.

## Tests

This component comes with a 100% code coverage.

To run tests:

```
npm test
```

To generate a code coverage report:

```
npm run test-coverage
```

The code coverage report can be viewed by opening `./coverage/lcov-report/index.html`.

The `handlebars@4.5.3` [work](https://github.com/handlebars-lang/handlebars.js/issues/1646#issuecomment-578306544)[around](https://github.com/facebook/jest/issues/9396#issuecomment-573328488) in `devDependencies` is for the test coverage to not produce empty reports:

```
Handlebars: Access has been denied to resolve the property "statements" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details
```

## TypeScript

This library comes with TypeScript "typings". If you happen to find any bugs in those, create an issue.

<!--
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
-->

## License

[MIT](LICENSE)