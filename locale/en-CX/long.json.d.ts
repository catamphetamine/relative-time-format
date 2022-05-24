import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CX';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;