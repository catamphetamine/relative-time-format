import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-VE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;