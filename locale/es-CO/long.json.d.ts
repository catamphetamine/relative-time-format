import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;