import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hant-MO';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;