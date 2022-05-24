import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'rm';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;