import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-AR';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;