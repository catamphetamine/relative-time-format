import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-BZ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;