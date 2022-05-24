import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh-Hant';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;