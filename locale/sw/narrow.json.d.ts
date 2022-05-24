import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sw';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;