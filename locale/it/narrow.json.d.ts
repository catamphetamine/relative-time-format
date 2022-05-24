import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'it';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;