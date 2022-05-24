import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PA';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;