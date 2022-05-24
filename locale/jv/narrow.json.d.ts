import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'jv';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;