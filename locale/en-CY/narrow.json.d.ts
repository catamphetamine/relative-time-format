import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CY';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;