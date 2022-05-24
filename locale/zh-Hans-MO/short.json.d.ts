import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hans-MO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;