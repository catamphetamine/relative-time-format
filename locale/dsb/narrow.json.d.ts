import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'dsb';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;