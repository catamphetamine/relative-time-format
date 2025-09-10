import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-RO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;