import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TT';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;