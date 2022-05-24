import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-PA';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;