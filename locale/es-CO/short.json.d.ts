import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;