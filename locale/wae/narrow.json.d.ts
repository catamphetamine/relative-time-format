import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'wae';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;