import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr-Cyrl-BA';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;