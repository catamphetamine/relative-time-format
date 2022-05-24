import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ksh';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;