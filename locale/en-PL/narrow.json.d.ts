import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PL';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;