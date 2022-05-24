import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CR';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;