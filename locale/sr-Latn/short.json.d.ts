import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sr-Latn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;