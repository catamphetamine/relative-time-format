import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MS';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;