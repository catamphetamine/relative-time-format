import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-SV';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;