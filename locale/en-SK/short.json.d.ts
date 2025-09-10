import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SK';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;