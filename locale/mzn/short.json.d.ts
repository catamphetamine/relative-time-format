import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mzn';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;