import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ar-AE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;