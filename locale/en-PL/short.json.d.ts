import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PL';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;