import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MG';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;