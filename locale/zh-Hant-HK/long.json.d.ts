import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hant-HK';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;