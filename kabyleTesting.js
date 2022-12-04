

import RelativeTimeFormat from './bundle/polyfill'

import kab from './locale/kab.json'

RelativeTimeFormat.addLocale(kab)

// Returns "2 days ago"
new RelativeTimeFormat("kab", {
  style: "long" // "long" is the default. Other options: "short", "narrow".
}).format(-2, "day")