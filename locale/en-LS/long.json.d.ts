import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LS';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;