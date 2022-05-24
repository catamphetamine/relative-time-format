import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;