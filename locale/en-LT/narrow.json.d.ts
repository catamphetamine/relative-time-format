import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;