import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NL';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;