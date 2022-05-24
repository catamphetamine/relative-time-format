import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-GT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;