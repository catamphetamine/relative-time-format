import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;