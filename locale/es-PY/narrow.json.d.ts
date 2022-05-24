import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PY';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;