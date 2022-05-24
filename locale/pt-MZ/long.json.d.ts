import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-MZ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;