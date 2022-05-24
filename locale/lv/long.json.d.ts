import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lv';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;