import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sl';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;