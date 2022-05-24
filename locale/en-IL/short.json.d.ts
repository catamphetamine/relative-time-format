import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IL';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;