import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;