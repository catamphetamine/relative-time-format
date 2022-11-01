import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'xh';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;