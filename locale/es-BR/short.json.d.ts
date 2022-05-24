import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-BR';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;