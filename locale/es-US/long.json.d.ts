import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-US';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;