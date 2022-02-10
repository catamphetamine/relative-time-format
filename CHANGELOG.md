1.0.6 / 27.09.2021
==================

  * Added locale data `*.json` files:

```js
import en from "relative-time-format/locale/en.json"
```

  * Added TypeScript "typings".

1.0.0 / 22.06.2019
==================

  * Bumped version to `1.0.0`. It's just to display the fact that the library is production-ready. No API changes or anything.

0.2.0 / 23.02.2019
==================

  * `locale` messages are now single `${locale}.json` bundles instead of being `${locale}` folders having a bunch of files like `long.js`/`short.js`/`narrow.js`/`quantify.js`/`index.js`. This was [requested](https://github.com/catamphetamine/relative-time-format/issues/4) for being able to use this library in scenarios when no "bundlers" are involved (for example, in a web browser).

  * `locale` messages no longer contain `quantify` function because they're in JSON format now. All `quantify` functions are now stored in `source/quantify.js` file and are part of the main code. Their size is about 5 kilobytes (minified) which is an equivalent of including `make-plural` library for generating quantifiers at runtime.

  * Fixed the browser bundle: it's now built using Rollup instead of Webpack, and also fixed the export being `RelativeTimeFormat` instead of `{ default: RelativeTimeFormat }`.

<!--
  * `locale` property inside `locale/${locale}/index.js` files was renamed to `id`.
-->

0.1.3 / 14.01.2019
===================

  * Fixed a bug when `.format()` threw an error in some cases.

0.1.1 / 13.01.2019
===================

  * Added "the day after tomorrow" / "the day before yesterday" messages (for example, for German language).

  * Fixed "yesterday"/"tomorrow" being applied only to days (can now be applied, say, to seconds returning "now").

  * Formatting numbers now uses `Intl.NumberFormat` when available.

0.1.0 / 12.01.2019
===================

  * Initial release.