import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NR';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;