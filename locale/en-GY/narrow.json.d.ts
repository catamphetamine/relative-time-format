import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GY';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;