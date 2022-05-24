import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mzn';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;