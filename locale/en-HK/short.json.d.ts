import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-HK';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;