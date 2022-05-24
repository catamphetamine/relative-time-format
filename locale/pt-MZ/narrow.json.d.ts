import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-MZ';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;