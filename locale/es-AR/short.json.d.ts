import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-AR';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;