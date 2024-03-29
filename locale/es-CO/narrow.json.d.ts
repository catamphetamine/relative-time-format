import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;