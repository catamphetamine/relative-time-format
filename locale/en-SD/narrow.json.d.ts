import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SD';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;