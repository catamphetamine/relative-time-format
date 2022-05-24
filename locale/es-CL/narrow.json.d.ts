import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CL';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;