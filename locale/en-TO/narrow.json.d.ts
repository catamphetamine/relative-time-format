import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;