import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hans-SG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;