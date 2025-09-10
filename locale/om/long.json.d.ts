import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'om';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;