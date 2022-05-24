import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'to';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;