import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PY';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;