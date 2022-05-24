import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ksh';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;