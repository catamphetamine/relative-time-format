import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;