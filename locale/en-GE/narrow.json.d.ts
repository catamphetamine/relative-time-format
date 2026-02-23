import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;