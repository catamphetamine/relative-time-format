import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'be';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;