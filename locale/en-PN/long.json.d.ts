import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-PN';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;