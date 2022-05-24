import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ar';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;