import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GH';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;