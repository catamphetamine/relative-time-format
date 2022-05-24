import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;