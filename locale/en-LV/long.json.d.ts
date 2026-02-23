import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LV';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;