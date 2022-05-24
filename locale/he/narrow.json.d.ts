import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'he';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;