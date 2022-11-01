import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'mai';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;