import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CH';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;