import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CY';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;