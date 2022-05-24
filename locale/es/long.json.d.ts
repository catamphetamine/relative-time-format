import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;