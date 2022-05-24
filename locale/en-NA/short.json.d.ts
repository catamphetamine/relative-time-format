import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NA';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;