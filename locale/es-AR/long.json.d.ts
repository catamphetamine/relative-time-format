import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-AR';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;