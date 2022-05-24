import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mzn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;