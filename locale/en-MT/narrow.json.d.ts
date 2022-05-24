import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-MT';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;