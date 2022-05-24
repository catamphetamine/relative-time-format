import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GI';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;