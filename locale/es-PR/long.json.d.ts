import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PR';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;