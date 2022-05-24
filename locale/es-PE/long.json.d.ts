import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;