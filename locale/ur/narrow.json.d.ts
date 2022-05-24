import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ur';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;