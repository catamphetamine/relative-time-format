import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GS';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;