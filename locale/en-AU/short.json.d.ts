import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-AU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;