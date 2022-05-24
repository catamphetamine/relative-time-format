import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-FI';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;