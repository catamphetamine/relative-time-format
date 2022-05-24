import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'be';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;