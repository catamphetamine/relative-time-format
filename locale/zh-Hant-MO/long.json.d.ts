import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hant-MO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;