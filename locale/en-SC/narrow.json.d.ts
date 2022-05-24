import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SC';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;