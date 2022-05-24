import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr-Latn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;