import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ar';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;