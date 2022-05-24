import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IL';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;