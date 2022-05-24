import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ZA';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;