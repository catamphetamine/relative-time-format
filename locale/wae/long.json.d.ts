import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'wae';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;