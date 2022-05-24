import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MS';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;