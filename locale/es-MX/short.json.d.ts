import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-MX';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;