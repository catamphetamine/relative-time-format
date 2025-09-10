import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SK';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;