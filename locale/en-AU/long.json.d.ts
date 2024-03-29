import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AU';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;