import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SH';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;