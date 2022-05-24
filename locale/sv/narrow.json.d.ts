import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'sv';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;