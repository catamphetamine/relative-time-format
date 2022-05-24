import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;