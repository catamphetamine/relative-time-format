import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;