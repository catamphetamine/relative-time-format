import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;