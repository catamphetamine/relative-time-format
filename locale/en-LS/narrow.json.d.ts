import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LS';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;