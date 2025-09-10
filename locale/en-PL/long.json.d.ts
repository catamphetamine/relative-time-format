import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PL';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;