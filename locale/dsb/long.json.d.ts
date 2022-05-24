import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'dsb';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;