import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr-Cyrl-BA';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;