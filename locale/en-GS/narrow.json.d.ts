import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GS';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;