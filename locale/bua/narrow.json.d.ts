import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'bua';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;