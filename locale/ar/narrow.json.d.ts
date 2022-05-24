import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ar';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;