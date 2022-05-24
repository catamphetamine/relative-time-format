import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'hsb';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;