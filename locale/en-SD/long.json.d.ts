import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SD';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;