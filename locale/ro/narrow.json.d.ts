import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ro';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;