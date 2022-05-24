import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CU';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;