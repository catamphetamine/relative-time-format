import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-HN';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;