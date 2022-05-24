import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ksh';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;