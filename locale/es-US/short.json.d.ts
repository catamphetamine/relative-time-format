import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-US';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;