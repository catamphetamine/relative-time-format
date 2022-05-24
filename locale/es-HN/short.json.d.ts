import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-HN';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;