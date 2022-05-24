import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PY';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;