import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hans-MO';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;