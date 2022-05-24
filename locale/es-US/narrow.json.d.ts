import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-US';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;