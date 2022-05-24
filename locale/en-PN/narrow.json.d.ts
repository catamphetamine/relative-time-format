import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PN';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;