import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;