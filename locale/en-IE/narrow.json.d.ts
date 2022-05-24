import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IE';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;