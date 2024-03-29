import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-TT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;