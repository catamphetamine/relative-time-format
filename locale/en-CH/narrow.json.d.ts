import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CH';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;