import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ZA';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;