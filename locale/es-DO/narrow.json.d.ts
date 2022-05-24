import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-DO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;