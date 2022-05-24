import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'nn';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;