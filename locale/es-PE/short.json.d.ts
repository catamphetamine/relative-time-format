import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;