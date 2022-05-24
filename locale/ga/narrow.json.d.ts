import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ga';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;