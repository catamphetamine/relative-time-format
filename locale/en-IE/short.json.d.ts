import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-IE';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;