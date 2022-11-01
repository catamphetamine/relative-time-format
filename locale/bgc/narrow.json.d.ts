import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bgc';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;