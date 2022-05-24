import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CR';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;