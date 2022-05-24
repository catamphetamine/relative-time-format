import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-EC';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;