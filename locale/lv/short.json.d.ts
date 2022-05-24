import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'lv';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;