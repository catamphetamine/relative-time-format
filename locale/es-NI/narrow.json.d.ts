import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-NI';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;