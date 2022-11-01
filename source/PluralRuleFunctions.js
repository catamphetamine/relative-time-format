// (this file was autogenerated by `generate-locales`)
// "plural rules" functions are not stored in locale JSON files because they're not strings.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.

var $ = {
	af: (n) => n == 1 ? 'one' : 'other',
	am: (n) => n >= 0 && n <= 1 ? 'one' : 'other',
	ar: (n) => {
		const s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
		return n == 0 ? 'zero'
			: n == 1 ? 'one'
			: n == 2 ? 'two'
			: (n100 >= 3 && n100 <= 10) ? 'few'
			: (n100 >= 11 && n100 <= 99) ? 'many'
			: 'other';
	},
	ast: (n) => {
		const s = String(n).split('.'), v0 = !s[1];
		return n == 1 && v0 ? 'one' : 'other';
	},
	be: (n) => {
		const s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
		return n10 == 1 && n100 != 11 ? 'one'
			: (n10 >= 2 && n10 <= 4) && (n100 < 12 || n100 > 14) ? 'few'
			: t0 && n10 == 0 || (n10 >= 5 && n10 <= 9) || (n100 >= 11 && n100 <= 14) ? 'many'
			: 'other';
	},
	br: (n) => {
		const s = String(n).split('.'), t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), n1000000 = t0 && s[0].slice(-6);
		return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one'
			: n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two'
			: ((n10 == 3 || n10 == 4) || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few'
			: n != 0 && t0 && n1000000 == 0 ? 'many'
			: 'other';
	},
	bs: (n) => {
		const s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
		return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one'
			: v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) || (f10 >= 2 && f10 <= 4) && (f100 < 12 || f100 > 14) ? 'few'
			: 'other';
	},
	ca: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
		return n == 1 && v0 ? 'one'
			: i != 0 && i1000000 == 0 && v0 ? 'many'
			: 'other';
	},
	ceb: (n) => {
		const s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), f10 = f.slice(-1);
		return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
	},
	cs: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1];
		return n == 1 && v0 ? 'one'
			: (i >= 2 && i <= 4) && v0 ? 'few'
			: !v0 ? 'many'
			: 'other';
	},
	cy: (n) => n == 0 ? 'zero'
			: n == 1 ? 'one'
			: n == 2 ? 'two'
			: n == 3 ? 'few'
			: n == 6 ? 'many'
			: 'other',
	da: (n) => {
		const s = String(n).split('.'), i = s[0], t0 = Number(s[0]) == n;
		return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
	},
	dsb: (n) => {
		const s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i100 = i.slice(-2), f100 = f.slice(-2);
		return v0 && i100 == 1 || f100 == 1 ? 'one'
			: v0 && i100 == 2 || f100 == 2 ? 'two'
			: v0 && (i100 == 3 || i100 == 4) || (f100 == 3 || f100 == 4) ? 'few'
			: 'other';
	},
	dz: (n) => 'other',
	es: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
		return n == 1 ? 'one'
			: i != 0 && i1000000 == 0 && v0 ? 'many'
			: 'other';
	},
	ff: (n) => n >= 0 && n < 2 ? 'one' : 'other',
	fr: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
		return n >= 0 && n < 2 ? 'one'
			: i != 0 && i1000000 == 0 && v0 ? 'many'
			: 'other';
	},
	ga: (n) => {
		const s = String(n).split('.'), t0 = Number(s[0]) == n;
		return n == 1 ? 'one'
			: n == 2 ? 'two'
			: (t0 && n >= 3 && n <= 6) ? 'few'
			: (t0 && n >= 7 && n <= 10) ? 'many'
			: 'other';
	},
	gd: (n) => {
		const s = String(n).split('.'), t0 = Number(s[0]) == n;
		return (n == 1 || n == 11) ? 'one'
			: (n == 2 || n == 12) ? 'two'
			: ((t0 && n >= 3 && n <= 10) || (t0 && n >= 13 && n <= 19)) ? 'few'
			: 'other';
	},
	he: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1];
		return i == 1 && v0 || i == 0 && !v0 ? 'one'
			: i == 2 && v0 ? 'two'
			: 'other';
	},
	is: (n) => {
		const s = String(n).split('.'), i = s[0], t = (s[1] || '').replace(/0+$/, ''), t0 = Number(s[0]) == n, i10 = i.slice(-1), i100 = i.slice(-2);
		return t0 && i10 == 1 && i100 != 11 || t % 10 == 1 && t % 100 != 11 ? 'one' : 'other';
	},
	ksh: (n) => n == 0 ? 'zero'
			: n == 1 ? 'one'
			: 'other',
	lt: (n) => {
		const s = String(n).split('.'), f = s[1] || '', t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2);
		return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one'
			: (n10 >= 2 && n10 <= 9) && (n100 < 11 || n100 > 19) ? 'few'
			: f != 0 ? 'many'
			: 'other';
	},
	lv: (n) => {
		const s = String(n).split('.'), f = s[1] || '', v = f.length, t0 = Number(s[0]) == n, n10 = t0 && s[0].slice(-1), n100 = t0 && s[0].slice(-2), f100 = f.slice(-2), f10 = f.slice(-1);
		return t0 && n10 == 0 || (n100 >= 11 && n100 <= 19) || v == 2 && (f100 >= 11 && f100 <= 19) ? 'zero'
			: n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one'
			: 'other';
	},
	mk: (n) => {
		const s = String(n).split('.'), i = s[0], f = s[1] || '', v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2), f10 = f.slice(-1), f100 = f.slice(-2);
		return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
	},
	mt: (n) => {
		const s = String(n).split('.'), t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
		return n == 1 ? 'one'
			: n == 2 ? 'two'
			: n == 0 || (n100 >= 3 && n100 <= 10) ? 'few'
			: (n100 >= 11 && n100 <= 19) ? 'many'
			: 'other';
	},
	pa: (n) => (n == 0 || n == 1) ? 'one' : 'other',
	pl: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
		return n == 1 && v0 ? 'one'
			: v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'
			: v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 12 && i100 <= 14) ? 'many'
			: 'other';
	},
	pt: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i1000000 = i.slice(-6);
		return (i == 0 || i == 1) ? 'one'
			: i != 0 && i1000000 == 0 && v0 ? 'many'
			: 'other';
	},
	ro: (n) => {
		const s = String(n).split('.'), v0 = !s[1], t0 = Number(s[0]) == n, n100 = t0 && s[0].slice(-2);
		return n == 1 && v0 ? 'one'
			: !v0 || n == 0 || n != 1 && (n100 >= 1 && n100 <= 19) ? 'few'
			: 'other';
	},
	ru: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i10 = i.slice(-1), i100 = i.slice(-2);
		return v0 && i10 == 1 && i100 != 11 ? 'one'
			: v0 && (i10 >= 2 && i10 <= 4) && (i100 < 12 || i100 > 14) ? 'few'
			: v0 && i10 == 0 || v0 && (i10 >= 5 && i10 <= 9) || v0 && (i100 >= 11 && i100 <= 14) ? 'many'
			: 'other';
	},
	se: (n) => n == 1 ? 'one'
			: n == 2 ? 'two'
			: 'other',
	si: (n) => {
		const s = String(n).split('.'), i = s[0], f = s[1] || '';
		return (n == 0 || n == 1) || i == 0 && f == 1 ? 'one' : 'other';
	},
	sl: (n) => {
		const s = String(n).split('.'), i = s[0], v0 = !s[1], i100 = i.slice(-2);
		return v0 && i100 == 1 ? 'one'
			: v0 && i100 == 2 ? 'two'
			: v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few'
			: 'other';
	}
}

$.as = $.am
$.az = $.af
$.bg = $.af
$.bn = $.am
$.brx = $.af
$.ce = $.af
$.chr = $.af
$.de = $.ast
$.ee = $.af
$.el = $.af
$.en = $.ast
$.et = $.ast
$.eu = $.af
$.fa = $.am
$.fi = $.ast
$.fil = $.ceb
$.fo = $.af
$.fur = $.af
$.fy = $.ast
$.gl = $.ast
$.gu = $.am
$.ha = $.af
$.hi = $.am
$.hr = $.bs
$.hsb = $.dsb
$.hu = $.af
$.hy = $.ff
$.ia = $.ast
$.id = $.dz
$.ig = $.dz
$.it = $.ca
$.ja = $.dz
$.jgo = $.af
$.jv = $.dz
$.ka = $.af
$.kea = $.dz
$.kk = $.af
$.kl = $.af
$.km = $.dz
$.kn = $.am
$.ko = $.dz
$.ks = $.af
$.ku = $.af
$.ky = $.af
$.lb = $.af
$.lkt = $.dz
$.lo = $.dz
$.ml = $.af
$.mn = $.af
$.mr = $.af
$.ms = $.dz
$.my = $.dz
$.nb = $.af
$.ne = $.af
$.nl = $.ast
$.nn = $.af
$.no = $.af
$.or = $.af
$.pcm = $.am
$.ps = $.af
$.rm = $.af
$.sah = $.dz
$.sc = $.ast
$.sd = $.af
$.sk = $.cs
$.so = $.af
$.sq = $.af
$.sr = $.bs
$.su = $.dz
$.sv = $.ast
$.sw = $.ast
$.ta = $.af
$.te = $.af
$.th = $.dz
$.ti = $.pa
$.tk = $.af
$.to = $.dz
$.tr = $.af
$.ug = $.af
$.uk = $.ru
$.ur = $.ast
$.uz = $.af
$.vi = $.dz
$.wae = $.af
$.wo = $.dz
$.xh = $.af
$.yi = $.ast
$.yo = $.dz
$.yue = $.dz
$.zh = $.dz
$.zu = $.am

export default $