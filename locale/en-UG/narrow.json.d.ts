import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-UG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;