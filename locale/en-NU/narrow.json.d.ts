import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NU';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;