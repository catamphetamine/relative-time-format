import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'dsb';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;