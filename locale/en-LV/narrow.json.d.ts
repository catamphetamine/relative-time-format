import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LV';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;