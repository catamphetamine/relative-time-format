import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CY';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;