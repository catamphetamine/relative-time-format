import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AU';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;