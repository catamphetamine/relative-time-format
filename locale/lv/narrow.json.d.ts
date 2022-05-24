import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lv';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;