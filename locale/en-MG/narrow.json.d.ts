import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MG';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;