import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr-Cyrl-BA';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;