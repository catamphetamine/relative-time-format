import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GS';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;