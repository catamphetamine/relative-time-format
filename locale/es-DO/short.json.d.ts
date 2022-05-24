import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-DO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;