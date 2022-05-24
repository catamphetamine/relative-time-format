import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-SV';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;