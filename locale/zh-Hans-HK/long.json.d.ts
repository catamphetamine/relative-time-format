import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hans-HK';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;