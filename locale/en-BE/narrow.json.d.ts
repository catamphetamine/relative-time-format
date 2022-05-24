import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;