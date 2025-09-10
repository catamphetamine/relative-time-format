import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-ES';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;