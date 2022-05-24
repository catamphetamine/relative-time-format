import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;