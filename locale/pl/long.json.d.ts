import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pl';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;