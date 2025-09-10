import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'om';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;