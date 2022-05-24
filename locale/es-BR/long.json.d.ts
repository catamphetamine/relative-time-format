import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-BR';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;