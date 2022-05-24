import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-SV';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;