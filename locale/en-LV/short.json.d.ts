import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LV';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;