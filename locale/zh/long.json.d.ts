import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'zh';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;