import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-CM';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;