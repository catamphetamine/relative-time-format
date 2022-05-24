import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ZA';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;