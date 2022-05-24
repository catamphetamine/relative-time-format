import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IE';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;