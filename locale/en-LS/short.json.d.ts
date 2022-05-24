import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-LS';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;