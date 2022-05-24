import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-UY';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;