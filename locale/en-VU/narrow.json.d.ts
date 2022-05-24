import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-VU';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;