# relative-time-format

[![npm version](https://img.shields.io/npm/v/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![npm downloads](https://img.shields.io/npm/dm/relative-time-format.svg?style=flat-square)](https://www.npmjs.com/package/relative-time-format)
[![npm size](https://img.shields.io/bundlephobia/minzip/relative-time-format.svg?label=size)](https://www.npmjs.com/package/relative-time-format)
[![coverage](https://img.shields.io/coveralls/catamphetamine/relative-time-format/master.svg?style=flat-square)](https://coveralls.io/r/catamphetamine/relative-time-format?branch=master)

Zero-dependency [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) / [`Intl.PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules) polyfill.

Easily create labels like `"1 day ago"`.

[Demo](https://catamphetamine.github.io/relative-time-format/)

## Install

```
npm install relative-time-format --save
```

Alternatively, one could include it on a web page [directly](#cdn) via a `<script/>` tag.

## Use

* `import` the languages, that your application is using, from `relative-time-format/locale/..`
* Add those languages by calling `RelativeTimeFormat.addLocale()`
* Create a `new RelativeTimeFormat(language, { style })` instance for a given `language` and `style`
* Call `.format(amount, unitOfTime)` to create a label

```js
import RelativeTimeFormat from "relative-time-format"
import en from "relative-time-format/locale/en"

// Add English language
RelativeTimeFormat.addLocale(en)
```

```js
// Create English formatter
const formatter = new RelativeTimeFormat("en", {
  style: "long" // other styles: "short", "narrow"
})

// Get label for "now + (-2) * day"
// Returns "2 days ago"
formatter.format(-2, "day")
```

That's basically it. More details can be read in the [official docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) for `Intl.RelativeTimeFormat`.

P.S. `Intl` not only has `RelativeTimeFormat` but a lot of other cool stuff. [Check it out](https://www.smashingmagazine.com/2025/08/power-intl-api-guide-browser-native-internationalization/).

## Languages

All supported languages can be found in the [`locale`](https://github.com/catamphetamine/relative-time-format/tree/master/locale) folder. Each language is a JSON file of shape:

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

The `format()` function simply substitutes `{0}` for a number and then returns the result.

`past` is used for negative numbers and `future` is used for positive ones.

Each number is classified into a category — `zero`, `one`, `two`, `few`, `many` or `other` — and then a corresponding label is picked.

<details>
<summary>Down the rabbit hole</summary>

######

[Unicode CLDR](http://cldr.unicode.org/) (Common Locale Data Repository) is an industry standard and is basically a collection of formatting rules for all locales (date, time, currency, measurement units, numbers, etc). All localizations come from [`cldr-dates-full`](https://github.com/unicode-cldr/cldr-dates-full) package (for example, [`en-US`](https://github.com/unicode-cldr/cldr-dates-full/blob/master/main/en-US-POSIX/dateFields.json)).

To determine whether a certain number is `one`, `few`, or something else, `relative-time-format` uses Unicode CLDR rules for formatting plurals. These rules are number quantifying functions (one for each locale) which can tell if a number should be treated as `zero`, `one`, `two`, `few`, `many` or `other`. Knowing how these pluralization rules work is not required but anyway here are some links for curious advanced readers: [rules explanation](http://cldr.unicode.org/index/cldr-spec/plural-rules), [list of rules for all locales](http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html), [list of rules for all locales in JSON format](https://github.com/unicode-cldr/cldr-core/blob/master/supplemental/plurals.json) (part of `cldr-core/supplemental` package), [converting those rules to javascript functions](https://github.com/eemeli/make-plural). These quantifying functions can be found as `quantify` properties of a locale data.

The `/locale` folder contains all supported languages and is generated from Unicode CLDR data using the following command:

```sh
npm run generate-locales
```

Locale data is extracted from `cldr-core` (quantifiers) and `cldr-dates-full` (relative time messages) packages which usually get some updates once or twice a year.

```sh
npm run update-locales
```
</details>

## Higher-level API

`Intl.RelativeTimeFormat` is intentionally a low-level API. Third-party libraries are supposed to be built on top of this low-level API. An example of such library is [`javascript-time-ago`](https://npmjs.com/package/javascript-time-ago).

```js
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

// Add English language
TimeAgo.addLocale(en)

// Create English formatter
const timeAgo = new TimeAgo('en')

// `.format()` function automatically converts a `Date` into a label like "1 day ago".

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

To include this library directly via a `<script/>` tag on a page, one can use any npm CDN service, e.g. [unpkg.com](https://unpkg.com) or [jsdelivr.com](https://jsdelivr.com)

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