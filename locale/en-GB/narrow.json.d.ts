import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GB';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;