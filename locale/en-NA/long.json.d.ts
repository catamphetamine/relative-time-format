import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NA';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;