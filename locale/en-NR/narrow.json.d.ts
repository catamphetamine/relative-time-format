import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NR';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;