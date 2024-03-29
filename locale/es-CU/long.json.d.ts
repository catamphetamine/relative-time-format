import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CU';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;