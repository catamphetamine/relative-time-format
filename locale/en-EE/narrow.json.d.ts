import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-EE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;