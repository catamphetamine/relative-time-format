import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-DO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;