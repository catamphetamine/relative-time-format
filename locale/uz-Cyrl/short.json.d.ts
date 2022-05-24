import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'uz-Cyrl';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;