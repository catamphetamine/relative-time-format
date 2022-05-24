import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-HK';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;