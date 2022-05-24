import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NL';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;