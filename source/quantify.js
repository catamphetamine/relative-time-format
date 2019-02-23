var $ = {
	af: function(n){return 1==n?"one":"other"},
	am: function(n){return 0<=n&&n<=1?"one":"other"},
	ar: function(e){var r=String(e).split("."),n=Number(r[0])==e&&r[0].slice(-2);return 0==e?"zero":1==e?"one":2==e?"two":3<=n&&n<=10?"few":11<=n&&n<=99?"many":"other"},
	ast: function(n){var r=!String(n).split(".")[1];return 1==n&&r?"one":"other"},
	be: function(e){var i=String(e).split("."),n=Number(i[0])==e,r=n&&i[0].slice(-1),s=n&&i[0].slice(-2);return 1==r&&11!=s?"one":2<=r&&r<=4&&(s<12||14<s)?"few":n&&0==r||5<=r&&r<=9||11<=s&&s<=14?"many":"other"},
	br: function(e){var i=String(e).split("."),n=Number(i[0])==e,r=n&&i[0].slice(-1),s=n&&i[0].slice(-2),t=n&&i[0].slice(-6);return 1==r&&11!=s&&71!=s&&91!=s?"one":2==r&&12!=s&&72!=s&&92!=s?"two":(3==r||4==r||9==r)&&(s<10||19<s)&&(s<70||79<s)&&(s<90||99<s)?"few":0!=e&&n&&0==t?"many":"other"},
	bs: function(e){var i=String(e).split("."),s=i[0],c=i[1]||"",l=!i[1],n=s.slice(-1),r=s.slice(-2),t=c.slice(-1),f=c.slice(-2);return l&&1==n&&11!=r||1==t&&11!=f?"one":l&&2<=n&&n<=4&&(r<12||14<r)||2<=t&&t<=4&&(f<12||14<f)?"few":"other"},
	cs: function(n){var r=String(n).split("."),t=r[0],e=!r[1];return 1==n&&e?"one":2<=t&&t<=4&&e?"few":e?"other":"many"},
	cy: function(e){return 0==e?"zero":1==e?"one":2==e?"two":3==e?"few":6==e?"many":"other"},
	da: function(r){var n=String(r).split("."),t=n[0],e=Number(n[0])==r;return 1!=r&&(e||0!=t&&1!=t)?"other":"one"},
	dsb: function(e){var i=String(e).split("."),t=i[0],n=i[1]||"",r=!i[1],s=t.slice(-2),c=n.slice(-2);return r&&1==s||1==c?"one":r&&2==s||2==c?"two":r&&(3==s||4==s)||3==c||4==c?"few":"other"},
	fil: function(i){var e=String(i).split("."),n=e[0],r=e[1]||"",s=!e[1],t=n.slice(-1),c=r.slice(-1);return s&&(1==n||2==n||3==n)||s&&4!=t&&6!=t&&9!=t||!s&&4!=c&&6!=c&&9!=c?"one":"other"},
	fr: function(n){return 0<=n&&n<2?"one":"other"},
	ga: function(n){var r=String(n).split("."),t=Number(r[0])==n;return 1==n?"one":2==n?"two":t&&3<=n&&n<=6?"few":t&&7<=n&&n<=10?"many":"other"},
	gd: function(r){var t=String(r).split("."),e=Number(t[0])==r;return 1==r||11==r?"one":2==r||12==r?"two":e&&3<=r&&r<=10||e&&13<=r&&r<=19?"few":"other"},
	he: function(n){var r=String(n).split("."),t=r[0],e=!r[1],i=Number(r[0])==n,o=i&&r[0].slice(-1);return 1==n&&e?"one":2==t&&e?"two":e&&(n<0||10<n)&&i&&0==o?"many":"other"},
	is: function(e){var i=String(e).split("."),r=i[0],n=Number(i[0])==e,s=r.slice(-1),t=r.slice(-2);return n&&1==s&&11!=t||!n?"one":"other"},
	ksh: function(e){return 0==e?"zero":1==e?"one":"other"},
	lt: function(e){var i=String(e).split("."),n=i[1]||"",r=Number(i[0])==e,s=r&&i[0].slice(-1),t=r&&i[0].slice(-2);return 1==s&&(t<11||19<t)?"one":2<=s&&s<=9&&(t<11||19<t)?"few":0!=n?"many":"other"},
	lv: function(e){var i=String(e).split("."),l=i[1]||"",r=l.length,s=Number(i[0])==e,c=s&&i[0].slice(-1),n=s&&i[0].slice(-2),t=l.slice(-2),o=l.slice(-1);return s&&0==c||11<=n&&n<=19||2==r&&11<=t&&t<=19?"zero":1==c&&11!=n||2==r&&1==o&&11!=t||2!=r&&1==o?"one":"other"},
	mk: function(i){var e=String(i).split("."),s=e[0],c=e[1]||"",l=!e[1],n=s.slice(-1),r=s.slice(-2),t=c.slice(-1),o=c.slice(-2);return l&&1==n&&11!=r||1==t&&11!=o?"one":"other"},
	mt: function(e){var n=String(e).split("."),r=Number(n[0])==e&&n[0].slice(-2);return 1==e?"one":0==e||2<=r&&r<=10?"few":11<=r&&r<=19?"many":"other"},
	pa: function(n){return 0==n||1==n?"one":"other"},
	pl: function(e){var i=String(e).split("."),n=i[0],r=!i[1],s=n.slice(-1),t=n.slice(-2);return 1==e&&r?"one":r&&2<=s&&s<=4&&(t<12||14<t)?"few":r&&1!=n&&(0==s||1==s)||r&&5<=s&&s<=9||r&&12<=t&&t<=14?"many":"other"},
	pt: function(n){var r=String(n).split(".")[0];return 0==r||1==r?"one":"other"},
	ro: function(e){var r=String(e).split("."),i=!r[1],n=Number(r[0])==e&&r[0].slice(-2);return 1==e&&i?"one":!i||0==e||1!=e&&1<=n&&n<=19?"few":"other"},
	ru: function(e){var i=String(e).split("."),n=i[0],r=!i[1],s=n.slice(-1),t=n.slice(-2);return r&&1==s&&11!=t?"one":r&&2<=s&&s<=4&&(t<12||14<t)?"few":r&&0==s||r&&5<=s&&s<=9||r&&11<=t&&t<=14?"many":"other"},
	se: function(n){return 1==n?"one":2==n?"two":"other"},
	si: function(n){var r=String(n).split("."),t=r[0],i=r[1]||"";return 0==n||1==n||0==t&&1==i?"one":"other"},
	sl: function(t){var e=String(t).split("."),i=e[0],n=!e[1],r=i.slice(-2);return n&&1==r?"one":n&&2==r?"two":n&&(3==r||4==r)||!n?"few":"other"}
}

$.as = $.am
$.az = $.af
$.bg = $.af
$.bn = $.am
$.ca = $.ast
$.ce = $.af
$.chr = $.af
$.de = $.ast
$.ee = $.af
$.el = $.af
$.en = $.ast
$.es = $.af
$.et = $.ast
$.eu = $.af
$.fa = $.am
$.fi = $.ast
$.fo = $.af
$.fur = $.af
$.fy = $.ast
$.gl = $.ast
$.gu = $.am
$.hi = $.am
$.hr = $.bs
$.hsb = $.dsb
$.hu = $.af
$.hy = $.fr
$.ia = $.ast
$.it = $.ast
$.jgo = $.af
$.ka = $.af
$.kk = $.af
$.kl = $.af
$.kn = $.am
$.ku = $.af
$.ky = $.af
$.lb = $.af
$.ml = $.af
$.mn = $.af
$.mr = $.am
$.nb = $.af
$.ne = $.af
$.nl = $.ast
$.nn = $.af
$.or = $.af
$.ps = $.af
$.sd = $.af
$.sk = $.cs
$.so = $.af
$.sq = $.af
$.sr = $.bs
$.sv = $.ast
$.sw = $.ast
$.ta = $.af
$.te = $.af
$.ti = $.pa
$.tk = $.af
$.tr = $.af
$.ug = $.af
$.uk = $.ru
$.ur = $.ast
$.uz = $.af
$.wae = $.af
$.yi = $.ast
$.zu = $.am

export default $