import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-MX';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;