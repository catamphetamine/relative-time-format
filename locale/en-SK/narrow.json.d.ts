import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SK';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;