import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'so';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;