import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;