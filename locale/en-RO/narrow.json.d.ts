import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-RO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;