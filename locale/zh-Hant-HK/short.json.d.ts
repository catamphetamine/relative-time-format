import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hant-HK';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;