import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SH';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;