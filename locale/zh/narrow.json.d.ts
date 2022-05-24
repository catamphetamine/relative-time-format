import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;