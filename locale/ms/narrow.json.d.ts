import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ms';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;