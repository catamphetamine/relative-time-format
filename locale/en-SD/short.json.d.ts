import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-SD';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;