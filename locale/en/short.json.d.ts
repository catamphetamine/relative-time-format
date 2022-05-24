import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;