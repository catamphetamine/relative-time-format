import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-419';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;