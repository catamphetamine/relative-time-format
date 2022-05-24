import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PR';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;