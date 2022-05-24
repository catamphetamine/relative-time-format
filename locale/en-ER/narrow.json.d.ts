import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ER';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;