import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NA';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;