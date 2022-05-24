import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;