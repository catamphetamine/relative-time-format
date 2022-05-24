import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-HN';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;