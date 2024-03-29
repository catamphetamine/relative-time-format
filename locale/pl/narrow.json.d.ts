import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;