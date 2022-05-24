import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'yue';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;