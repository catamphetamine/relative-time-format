import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GI';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;