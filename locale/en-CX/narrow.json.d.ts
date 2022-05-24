import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CX';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;