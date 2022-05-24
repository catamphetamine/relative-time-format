import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pa';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;