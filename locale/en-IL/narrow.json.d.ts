import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IL';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;