import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GI';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;