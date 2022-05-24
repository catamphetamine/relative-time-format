import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SC';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;