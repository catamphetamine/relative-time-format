import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;