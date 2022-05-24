import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GY';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;