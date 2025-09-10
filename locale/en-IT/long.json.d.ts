import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IT';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;