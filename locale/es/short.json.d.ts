import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;