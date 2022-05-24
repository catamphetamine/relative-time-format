import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CL';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;