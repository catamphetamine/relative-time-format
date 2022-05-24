import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;