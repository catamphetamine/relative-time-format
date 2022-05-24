import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-BR';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;