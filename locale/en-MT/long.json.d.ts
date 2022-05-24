import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MT';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;