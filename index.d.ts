export type Locale = string;

export type Style = 'long' | 'short' | 'narrow';

type Numeric = 'auto' | 'always';

export type Unit = 'year' | 'quarter' | 'month' | 'week' | 'day' | 'hour' | 'minute' | 'second';

// https://github.com/eemeli/make-plural/blob/master/packages/compiler/src/compile-range.js#L1
export type Count = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';

export type CountLabels = {
	[count in Count]?: string;
}

export interface PastAndFutureLabels {
	past: string | CountLabels;
	future: string | CountLabels;
	previous?: string;
	current?: string;
	next?: string;
}

export type UnitLabels = string | CountLabels | PastAndFutureLabels

export type Labels = {
	// Won't compile:
	// [unit in Unit]: UnitLabels;
	year: UnitLabels;
	quarter: UnitLabels;
	month: UnitLabels;
	week: UnitLabels;
	day: UnitLabels;
	hour: UnitLabels;
	minute: UnitLabels;
	second: UnitLabels;
}

export type LocaleData = {
	locale: Locale;
	long: Labels;
	short: Labels;
	narrow: Labels;
}

// 'best fit' locale matching is not supported.
export type LocaleMatcher = 'lookup' | 'best fit';

export class PluralRules {
  constructor(locale: Locale | Locale[], options?: { type?: 'cardinal' });
  select(number: number): Count;
  static supportedLocalesOf(locale: Locale | Locale[]): Locale[];
}

interface LiteralPart {
	type: 'literal';
	value: string;
}

interface IntegerPart {
	type: 'integer';
	value: string;
	unit: Unit;
}

export type Part = LiteralPart | IntegerPart;

// `new Intl.NumberFormat().resolvedOptions().numberingSystem`.
// Example: 'latn'.
type NumberingSystem = string;

export default class RelativeTimeFormat {
  constructor(locale: Locale | Locale[], options?: { style?: Style, numeric?: Numeric, localeMatcher?: LocaleMatcher });

  format(number: number, unit: Unit): string;
  formatToParts(number: number, unit: Unit): Part[];
  resolvedOptions(): { locale: Locale, style: Style, numeric: Numeric, numberingSystem: NumberingSystem };

  static addLocale(localeData: LocaleData): void;
  static addDefaultLocale(localeData: LocaleData): void;
  static setDefaultLocale(locale: Locale): void;

  static PluralRules: PluralRules;
  static supportedLocalesOf(locale: Locale | Locale[], options?: { localeMatcher?: LocaleMatcher }): Locale[];
}