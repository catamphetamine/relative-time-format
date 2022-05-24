import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-CL';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;