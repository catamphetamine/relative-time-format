import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-UY';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;