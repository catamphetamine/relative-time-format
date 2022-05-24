import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-HK';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;