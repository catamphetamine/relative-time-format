import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'wo';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;