import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ES';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;