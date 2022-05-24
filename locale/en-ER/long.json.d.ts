import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ER';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;